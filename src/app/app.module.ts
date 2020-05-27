import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import for firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { CrudService} from './users/service/crud.service';

//import router
import { Routes, RouterModule } from '@angular/router';

//import form
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';  
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HomeComponent } from './home/home.component';
import { VerifyEmailComponent } from './users/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './users/forget-password/forget-password.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    UserHeaderComponent, 
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreatepostComponent,
    HomeComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 

    RouterModule.forRoot([
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'createpost', component: CreatepostComponent},
      {path: 'home', component: HomeComponent},
      {path: 'verify-mail', component: VerifyEmailComponent},
      {path: 'forget-password', component: ForgetPasswordComponent}

    ]),
    
  //  firebase configuration
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireModule,
  ],
  
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule { }
