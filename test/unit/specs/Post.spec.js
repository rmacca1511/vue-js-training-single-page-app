import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  it('should render the link', () => {
    const PostConstructer = Vue.extend(Post)
    const comp = new PostConstructer({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')
  })
})
