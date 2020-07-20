import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('Clears Value', () => {
  it('clearValue', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="clearValueIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(0);
  });
});



describe('Makes a number negative', () => {
  it('clearValue', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="negativePositiveIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(-7);
  });
});

describe('Makes a negative positive', () => {
  it('clearValue', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = -7;
    const spy = jest.fn();
    wrapper.find('img[alt="negativePositiveIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(7);
  });
});

describe('Change a number to percentage', () => {
  it('percentage', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="percentageIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(0.07);
  });
});

describe('Increases value of number', () => {
  it('number', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77);
    wrapper.find('img[alt="number(8)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(778);
    wrapper.find('img[alt="number(9)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(7789);
    wrapper.find('img[alt="number(0)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77890);
    wrapper.find('img[alt="number(1)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(778901);
    wrapper.find('img[alt="number(2)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(7789012);
    wrapper.find('img[alt="number(3)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77890123);
    wrapper.find('img[alt="number(4)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(778901234);
    wrapper.find('img[alt="number(5)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(7789012345);
    wrapper.find('img[alt="number(6)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77890123456);
  });
});

describe('Increases value of number as decimals', () => {
  it('number', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77);
    wrapper.find('img[alt="decimalIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe("77.00");
    wrapper.find('img[alt="number(9)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77.9);
    wrapper.find('img[alt="number(1)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77.91);
    wrapper.find('img[alt="decimalIcon"]').trigger('click');
    wrapper.find('img[alt="number(3)Icon"]').trigger('click');
    expect(wrapper.vm.value).toBe(77.913);
  });
});

describe('Add two numbers', () => {
  it('add', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="addIcon"]').trigger('click');
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    wrapper.find('img[alt="equalIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(14);
  });
});

describe('Multiply two numbers', () => {
  it('multiply', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="mutliplyIcon"]').trigger('click');
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    wrapper.find('img[alt="equalIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(49);
  });
});

describe('Divide two numbers', () => {
  it('divide', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="divideIcon"]').trigger('click');
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    wrapper.find('img[alt="equalIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(1);
  });
});

describe('Subtract two numbers', () => {
  it('subtract', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    const spy = jest.fn();
    wrapper.find('img[alt="subtractIcon"]').trigger('click');
    wrapper.find('img[alt="number(7)Icon"]').trigger('click');
    wrapper.find('img[alt="equalIcon"]').trigger('click');
    expect(wrapper.vm.value).toBe(0);
  });
});
