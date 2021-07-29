import {BehaviorSubject} from "rxjs"

const events$ = new BehaviorSubject({open: false,message: null});

const notificationService = {
    open: (message) => events$.next({open:true, message}),
    events$: events$.asObservable(),
    close: () => events$.next({open:false, message:null})
}

export default notificationService;