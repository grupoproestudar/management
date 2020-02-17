import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from './data/firebase'
import Util from './util';

Vue.use(Vuex)

// handle page reload
auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
    }
})

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        feedbacks: []
    },
    actions: {
        signIn({ commit }, obj) {
            auth
                .signInWithEmailAndPassword(
                    obj.login.email,
                    obj.login.password
                )
                .then(user => {
                    commit("setCurrentUser", user);
                    obj.callback()
                })
                .catch(err => {
                    obj.callbackErr(err)
                });
        },
        logout({ commit }) {
            auth.signOut()
            commit('setCurrentUser', null)
            Util.onRefresh()
            Util.onReload()
        },
        subscribeFeedbacks({ commit }) {
            db.collection("feedbacks")
                .onSnapshot(function (snapshot) {
                    snapshot.docChanges().forEach(function (change) {
                        if (change.type === "added") {
                            commit('setFeedbacksRealTime', {
                                id: change.doc.id,
                                ...change.doc.data()
                            })
                        }
                    })
                })
        }

    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setFeedbacksRealTime(state, val) {
            if (!state.feedbacks.some(el => el.id == val.id)) {
                state.feedbacks.push(val)
            }
        }
    }
})