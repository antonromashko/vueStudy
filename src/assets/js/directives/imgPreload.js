import loading from '@/assets/img/loading.gif'
import error from '@/assets/img/error.png'

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
    }

function imgPreload(el, binding) {
  try {
    const img = new Image();
    el.src = loading

    const observer = new IntersectionObserver(() => img.src = binding.value, options);
    observer.observe(img);

    img.onload = () => {
      el.src = img.src
    }
    img.onerror = () => {
      el.src = error
    };
  } catch (e) {
    console.log(e)
  }
}

export default imgPreload