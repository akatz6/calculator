import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Changes a number from positive to negative', () => {
  it('negativePositive', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    wrapper.vm.negativePositive();
    expect(wrapper.vm.value).toBe(-7);
  })
})

describe('Changes a number from negative to positive', () => {
  it('negativePositive', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = -7;
    wrapper.vm.negativePositive();
    expect(wrapper.vm.value).toBe(7);
  })
})

describe('Changes the value to 0', () => {
  it('clearValue', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 7;
    wrapper.vm.clearValue();
    expect(wrapper.vm.value).toBe(0);
  })
})

describe('Changes the value to a percentage', () => {
  it('percentage', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 9;
    wrapper.vm.percentage();
    expect(wrapper.vm.value).toBe(0.09);
    wrapper.vm.percentage();
    expect(wrapper.vm.value).toBe(0.0009);
  })
})

describe('Changes the value to have a decimal and ignores if called twice', () => {
  it('decimal', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 9;
    wrapper.vm.decimal();
    expect(wrapper.vm.value).toBe("9.00");
    wrapper.vm.number(1);
    expect(wrapper.vm.value).toBe(9.1);
    wrapper.vm.decimal();
    wrapper.vm.number(3);
    expect(wrapper.vm.value).toBe(9.13);
  })
})

describe('Adding two number', () => {
  it('operations', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 9;
    wrapper.vm.number(1);
    expect(wrapper.vm.value).toBe(91);
    wrapper.vm.operations('add');
    wrapper.vm.number(3);
    wrapper.vm.number(2);
    wrapper.vm.equal();
    expect(wrapper.vm.value).toBe(123);
  })
})

describe('Adding two number with decimals', () => {
  it('operations', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 9;
    wrapper.vm.decimal();
    wrapper.vm.number(1);
    expect(wrapper.vm.value).toBe(9.1);
    wrapper.vm.operations('add');
    wrapper.vm.number(3);
    wrapper.vm.decimal();
    wrapper.vm.number(2);
    expect(wrapper.vm.value).toBe(3.2);
    wrapper.vm.equal();
    expect(wrapper.vm.value).toBe(12.3);
  })
})

describe('Adding two number with decimals where one has no values after decimal', () => {
  it('operations', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.value = 9;
    wrapper.vm.decimal();
    expect(wrapper.vm.value).toBe("9.00");
    wrapper.vm.operations('add');
    wrapper.vm.number(3);
    wrapper.vm.decimal();
    wrapper.vm.number(2);
    expect(wrapper.vm.value).toBe(3.2);
    wrapper.vm.equal();
    expect(wrapper.vm.value).toBe(12.2);
  })

  describe('Subtracting two number', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(91);
      wrapper.vm.operations('subtract');
      wrapper.vm.number(3);
      wrapper.vm.number(2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(59);
    })
  })

  describe('Subtracting two number with negative result', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 3;
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(32);
      wrapper.vm.operations('subtract');
      wrapper.vm.number(9);
      wrapper.vm.number(1);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(-59);
    })
  })
  
  describe('Subtracting two number with decimals', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.decimal();
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(9.1);
      wrapper.vm.operations('subtract');
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(5.9);
    })
  })

  describe('Subtracting two number with decimals negative results', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.operations('subtract');
      wrapper.vm.number(9);
      wrapper.vm.decimal();
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(9.1);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(-5.9);
    })
  })

  describe('Multiply two number', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(91);
      wrapper.vm.operations('mutliply');
      wrapper.vm.number(3);
      wrapper.vm.number(2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(2912);
    })
  })
  
  describe('Multiply two number with decimals', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.decimal();
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(9.1);
      wrapper.vm.operations('mutliply');
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(29.12);
    })
  })
  
  describe('Multiply two number with decimals where one has no values after decimal', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.decimal();
      expect(wrapper.vm.value).toBe("9.00");
      wrapper.vm.operations('mutliply');
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(28.8);
    })
  })

  describe('Divide two number', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(91);
      wrapper.vm.operations('divide');
      wrapper.vm.number(3);
      wrapper.vm.number(2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(2.84375);
    })
  })
  
  describe('Divide two number with decimals', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.value = 9;
      wrapper.vm.decimal();
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(9.1);
      wrapper.vm.operations('divide');
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(2.84375);
    })
  })

  describe('Divide two number with decimals negative results', () => {
    it('operations', () => {
      const wrapper = shallowMount(App);
      wrapper.vm.number(3);
      wrapper.vm.decimal();
      wrapper.vm.number(2);
      expect(wrapper.vm.value).toBe(3.2);
      wrapper.vm.operations('divide');
      wrapper.vm.number(9);
      wrapper.vm.decimal();
      wrapper.vm.number(1);
      expect(wrapper.vm.value).toBe(9.1);
      wrapper.vm.equal();
      expect(wrapper.vm.value).toBe(0.3516483516483517);
    })
  })
})





