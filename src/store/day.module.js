
import { router } from '@/routes'



export const day = {
    namespaced: true,
    state: {
        pageType: "list", // or detail
        pageSubtype: "insert", // or update
        id: 2,
        // calcType 0: 1일부터시작, 1: 0일부터 시작
        dayList:[
            {
                id: 0,
                iconColor: "",
                iconName: "favorite",
                name: "헬스장",
                date: "2019.10.01(월)",
                calcType: 0,
            },
            {
                id: 1,
                iconColor: "red",
                iconName: "favorite",
                name: "생일",
                date: "2014.03.11(월)",
                calcType: 0,
            },{
                id: 2,
                iconColor: "",
                iconName: "",
                name: "유럽여행",
                date: "2016.07.28(월)",
                calcType: 1,
            },
        ]
    },
    getters: {
        getPageType: state => {
            return state.pageType;
        },
        getPageSubType: state => {
            return state.pageSubType;
        },
        getDayList: state => {
            return state.dayList;
        }
    },
    mutations: {
        setPageType: (state, payload) => {
            state.pageType = payload;
        },
        setPageSubType: (state, payload) => {
            state.pageSubType = payload;
        },
        setDayList(state, payload) {
            state.dayList = payload
        }
    },
    actions: {
        
        
    }
}