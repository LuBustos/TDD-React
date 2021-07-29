import {BehaviorSubject} from "rxjs"

const events$ = new BehaviorSubject({open: false,data: null});

const bookingDialogService = {
    open: (home) => events$.next({open:true, data:home}),
    events$: events$.asObservable(),
    close: () => events$.next({open:false, data:null})
}

export default bookingDialogService;