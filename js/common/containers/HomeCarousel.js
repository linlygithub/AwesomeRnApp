/**
 * Created by Administrator on 2017/7/27.
 */
'use strict';

import {connect} from 'react-redux';
import ImageCarousel from '../components/Carousel';

const mapStateToProps = (state) => ({
  carousel:state.home_scene.carousel,
});

const HomeCarousel = connect(mapStateToProps)(ImageCarousel);

export default HomeCarousel;