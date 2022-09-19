import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {

  let component = new AppComponent;
  let comp: AppComponent | null;

  beforeAll(() => {
    console.log('beforeAll', );    
  });
  
  afterAll(() => {
    console.log('afterAll', );    
  });

  beforeEach(() => {
    comp = new AppComponent();
  });
  
  afterEach(() => {
    console.log('afterEach', );    
    // comp = null;
    comp = null;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-test-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-test-app app is running!');
  });

  it('my testCase', () => {
    expect(true).toBe(true);
  });

  it('showMessage()', () => {
    expect(component.showMessage('Hello')).toBe('Hello');
  });

  it('Addition()', () => {
    expect(Addition(10, 20)).toBe(30);
  });

  it('toBe and toEqual', () => {
    let a = ['Hello'];
    let b = ['Hello'];

    // expect(a).toBe(b); // for primitive data type only
    expect(a).toEqual(b);
  });

  it('toBeTrue', () => {
    let a = true;

    expect(a).toBeTrue();
  });

  it('toBeTruthy and toBeFalsy', () => {
    // let a = true;
    // let a = '1';
    let a = '';
    // let a = 1;

    // expect(a).toBeTruthy();
    expect(a).toBeFalsy();
  });

  it('toBeGreaterThanOrEqual', () => {
    let a = 5;

    expect(a).toBeGreaterThanOrEqual(4);
  });

  it('toBeGreaterThanOrEqual', () => {
    let a = 5;

    expect(a).toBeLessThan(7);
  });

  it('toMatch', () => {
    let input = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis, voluptatum consequatur animi eum soluta a in natus ex amet?';
    let strPhone = '0000-111-222';
    expect(input).toMatch(/ipsum/);
    expect(input).toMatch(/ipsum/i);
    expect(strPhone).not.toMatch(/3/i);
    expect(strPhone).toMatch(/2/);
    expect(strPhone).toMatch(/222/);
    expect(strPhone).toMatch(/\d{4}-\d{3}-\d{3}/);
  });

  it('toBeCloseTo', () => {
    let pi = 3.1415926;
    let e = 2.78;
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e, 0);
    expect(4.334).toBeCloseTo(4.3, 1);
    expect(4.334).not.toBeCloseTo(4.3, 2);
    expect(4.334).not.toBeCloseTo(4.3, 3);
  });
  
  it('toBeCloseTo', () => {
    let pi = 3.1415926;
    let e = 2.78;
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e, 0);
    expect(4.334).toBeCloseTo(4.3, 1);
    expect(4.334).not.toBeCloseTo(4.3, 2);
    expect(4.334).not.toBeCloseTo(4.3, 3);
  });

  it('toBeDefined', () => {
    let myObj = {
      foo: 'foo'
    };

    let myFunction = function() {}();
    let strUndefined;

    expect('test').toBeDefined();
    expect(myObj).toBeDefined();
    expect(myObj.foo).toBeDefined();
    expect(myFunction).not.toBeDefined();
    expect(strUndefined).not.toBeDefined();
  });

  it('toBeDefined', () => {
    let myObj = {
      foo: 'foo',
      a: undefined
    };
    let myObj2;

    let myFunction = function() {}();
    let strUndefined;

    expect('test').not.toBeUndefined();
    expect(myObj2).toBeUndefined();
    expect(myObj.a).toBeUndefined();
    expect(myFunction).toBeUndefined();
    expect(strUndefined).toBeUndefined();
  });

  it('toBeNull', () => {
    let nullValue = null;
    let undefinedValue;
    let notNull = 'notNull';

    expect(nullValue).toBeNull();
    expect(undefinedValue).not.toBeNull();
    expect(notNull).not.toBeNull();
  });

  it('toContain', () => {
    let myArray = [
      'jasmine',
      'karma',
      'test'
    ];

    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).toContain(2, 3);
    expect(myArray).toContain('karma');
    expect(myArray).not.toContain('🐎');
  });

  it('toBeNaN', () => {
    expect(0 / 0).toBeNaN();
    expect(0 / 5).not.toBeNaN();
  });

  it('toBePositiveInfinity', () => {
    expect(1 / 0).toBePositiveInfinity();
  });

  it('toBeNegativeInfinity', () => {
    expect(-1 / 0).toBeNegativeInfinity();
  });

  it('incraseCount', () => {
    comp?.incraseCount(2);

    expect(comp?.count).toEqual(2);
  });

  it('decraseCunt', () => {
    comp?.incraseCount(10);
    comp?.decraseCount(2);
    
    expect(comp?.count).toEqual(8);
  });
  
});
