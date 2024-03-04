import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpComponent } from './pages/help/help.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AntiDiscriminationPolicyComponent } from './pages/anti-discrimination-policy/anti-discrimination-policy.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CustomerReviewsComponent } from './pages/customer-reviews/customer-reviews.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { HomeHouseExpertComponent } from './pages/home/home-house-expert/home-house-expert.component';
import { HomeRequestComponent } from './pages/home/home-request/home-request.component';
import { HomeFaqComponent } from './pages/home/home-faq/home-faq.component';
import { StopleaksComponent } from './pages/home/stopleaks/stopleaks.component';
import { BitebackComponent } from './pages/home/biteback/biteback.component';
import { SalonComponent } from './pages/home/salon/salon.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AboutUsComponent,
    HelpComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    AntiDiscriminationPolicyComponent,
    CareersComponent,
    CustomerReviewsComponent,
    BlogsComponent,
    FaqComponent,
    ContactUsComponent,
    HomeComponent,
    SearchComponent,
    IntroComponent,
    HomeServicesComponent,
    HomeHouseExpertComponent,
    HomeRequestComponent,
    HomeFaqComponent,
    StopleaksComponent,
    BitebackComponent,
    SalonComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
