import { Component, 
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit } from '@angular/core';
  import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  componentRef: any; 

  @ViewChild('dashboard', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }
  
    createComponent() {
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(DashboardComponent);
      this.componentRef = this.entry.createComponent(factory);
      // const componentRef = this.entry.createComponent(factory);
    }
 
    destroyComponent() {
      this.componentRef.destroy();
  }

  ngOnInit() {
  }

}
