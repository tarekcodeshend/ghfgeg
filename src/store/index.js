import Vue from "vue";
import Vuex from "vuex";

import modals from "./modules/modals";
import notifications from "./modules/notifications";
import sound from "./modules/sound";
import socket from "./modules/socket";
import auth from "./modules/auth";
import general from "./modules/general";
import user from "./modules/user";
import chat from "./modules/chat";
import battles from './modules/battles';
import rain from "./modules/rain";
import crash from './modules/crash';
import roll from "./modules/roll";
import blackjack from "./modules/blackjack";
import mines from "./modules/mines";
import towers from "./modules/towers";
import plinko from "./modules/plinko";
import roulette from "./modules/roulette";
import cashier from "./modules/cashier";
import rakeback from "./modules/rakeback";
import affiliates from "./modules/affiliates";
import leaderboard from "./modules/leaderboard";
import admin from "./modules/admin";
import upgrader from "./modules/upgrader";
import unbox from './modules/unbox';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modals,
    unbox,
    notifications,
    sound,
    battles,
    upgrader,
    socket,
    auth,
    general,
    user,
    chat,
    rain,
    crash,
    roll,
    blackjack,
    mines,
    towers,
    plinko,
    roulette,
    cashier,
    rakeback,
    affiliates,
    leaderboard,
    admin,
  },
});
