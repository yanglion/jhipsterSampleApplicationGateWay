import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleApplicationGateWaySharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationGateWayAppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplicationGateWayHomeModule } from './home/home.module';
import { JhipsterSampleApplicationGateWayAdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationGateWayAccountModule } from './account/account.module';
import { JhipsterSampleApplicationGateWayEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplicationGateWayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationGateWaySharedModule,
        JhipsterSampleApplicationGateWayHomeModule,
        JhipsterSampleApplicationGateWayAdminModule,
        JhipsterSampleApplicationGateWayAccountModule,
        JhipsterSampleApplicationGateWayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationGateWayAppModule {}
