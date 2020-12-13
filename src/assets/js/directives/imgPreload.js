import loading from '@/assets/img/loading.gif'
import error from '@/assets/img/error.png'

function imgPreload(el, binding) {
  try {
    const img = new Image();
    el.src = loading
    img.src = binding.value;
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