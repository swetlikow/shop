import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfigOptionsService } from '../shared/services/config-options.service';
import {
  constantsInstance,
  ConstantsService,
} from '../shared/services/constants.service';
import {
  GenerateToken,
  GeneratorFactory,
} from '../shared/services/generator.factory';
import { GeneratorService } from '../shared/services/generator.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { DivFontSizeDirective } from './../shared/directives/div-font-size.directive';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElements: DebugElement[];
  let directiveDebugElement: DebugElement;
  const generateTokenLength = 5;
  const currentUserEmail = 'andrii_svietlikov@epam.com';
  const shopVersionTemplate =
    'App: Shop Version: 1.0 URL: http://localhost:4200';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, DivFontSizeDirective],
      providers: [
        { provide: ConstantsService, useValue: constantsInstance },
        { provide: ConfigOptionsService, useClass: LocalStorageService },
        {
          provide: GenerateToken,
          useFactory: GeneratorFactory(generateTokenLength),
          deps: [GeneratorService],
        },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('.col-sm-6'));
    directiveDebugElement = fixture.debugElement.query(
      By.directive(DivFontSizeDirective)
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show currentUser on template', () => {
    const htmlElement: HTMLElement = debugElements[0].nativeElement;
    expect(htmlElement.innerText).toContain(currentUserEmail);
  });

  it('should show changed currentUser on template', () => {
    const newEmail = 'new@email.com';
    component.currentUser.email = newEmail;
    fixture.detectChanges();
    const htmlElement: HTMLElement = debugElements[0].nativeElement;
    expect(htmlElement.innerText).toContain('new@email.com');
  });

  it('should show app version and url on template', () => {
    const htmlElement: HTMLElement = debugElements[1].nativeElement;
    expect(htmlElement.innerText).toEqual(shopVersionTemplate);
  });

  it('should generate token', () => {
    expect(component.token.length).toEqual(generateTokenLength);
  });

  it('should set div text fontSize up using directive "appDivFontSize"', () => {
    directiveDebugElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    const fontSize = directiveDebugElement.nativeElement.style.fontSize;
    expect(fontSize).toEqual('16px');
  });
});
