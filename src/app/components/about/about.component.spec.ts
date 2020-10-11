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
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElements: DebugElement[];
  const generateTokenLength: number = 5;
  const currentUserEmail: string = 'andrii_svietlikov@epam.com';
  const shopVersionTemplate: string =
    'App: Shop Version: 1.0 URL: http://localhost:4200';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show currentUser on template', () => {
    let htmlElement: HTMLElement = debugElements[0].nativeElement;
    expect(htmlElement.innerText).toContain(currentUserEmail);
  });

  it('should show changed currentUser on template', () => {
    const newEmail = 'new@email.com';
    component.currentUser.email = newEmail;
    fixture.detectChanges();
    let htmlElement: HTMLElement = debugElements[0].nativeElement;
    expect(htmlElement.innerText).toContain('new@email.com');
  });

  it('should show app version and url on template', () => {
    let htmlElement: HTMLElement = debugElements[1].nativeElement;
    expect(htmlElement.innerText).toEqual(shopVersionTemplate);
  });

  it('should generate token', () => {
    expect(component.token.length).toEqual(generateTokenLength);
  });
});
