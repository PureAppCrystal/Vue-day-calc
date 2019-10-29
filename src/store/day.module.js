
import { router } from '@/routes'



export const day = {
    namespaced: true,
    state: {
        id: 2,
        // calcType 0: 1일부터시작, 1: 0일부터 시작
        dayList:[
            {
                id: 0,
                iconColor: "",
                iconName: "favorite",
                name: "헬스장",
                date: "2019.10.28(월)",
                calcType: 0,
            },
            {
                id: 1,
                iconColor: "red",
                iconName: "favorite",
                name: "생일",
                date: "2019.10.28(월)",
                calcType: 0,
            },{
                id: 2,
                iconColor: "",
                iconName: "",
                name: "유럽여행",
                date: "2019.10.28(월)",
                calcType: 1,
            },
        ]
    },
    getters: {
        getDayList: state => {
            return state.dayList;
        }
    },
    mutations: {
        setDayList(state, payload) {
            state.dayList = payload
        }
    },
    actions: {
        
        
    }
}