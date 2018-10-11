import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from "@angular/core/";
import { UserService } from '../core/services/user.service';

@Directive({
    selector:'[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit{
    condition:boolean;
    constructor(
        private templateRef:TemplateRef<any>,
        private viewContainer:ViewContainerRef,
        private userService:UserService
    ){}

    ngOnInit(){
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                if(isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
            
                } else {
                    this.viewContainer.clear();
            
                }
            }
        );
    }

    @Input() set appShowAuthed(condition:boolean) {
        this.condition = condition;
    }
}