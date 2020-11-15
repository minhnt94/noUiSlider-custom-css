import $ from 'jquery';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import './style.scss';

$('.slider-bar').each(function () {
  const { start, min, max, type } = $(this).data();

  noUiSlider.create($(this)[0], {
    start: start,
    connect: type === 'single' ? 'lower' : true,
    range: {
      min: min,
      max: max,
    },
  });
});
