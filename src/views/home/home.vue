<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <homerecommond :recommond='recommends'></homerecommond>
    <feauture/>
    <tab-control :title="['流行','新款','精品']"></tab-control>
    <ul>
      <li>学习好累呀1</li>
      <li>学习好累呀2</li>
      <li>学习好累呀3</li>
      <li>学习好累呀4</li>
      <li>学习好累呀5</li>
      <li>学习好累呀6</li>
      <li>学习好累呀7</li>
      <li>学习好累呀8</li>
      <li>学习好累呀9</li>
      <li>学习好累呀10</li>
      <li>学习好累呀11</li>
      <li>学习好累呀12</li>
      <li>学习好累呀13</li>
      <li>学习好累呀14</li>
      <li>学习好累呀15</li>
      <li>学习好累呀16</li>
      <li>学习好累呀17</li>
      <li>学习好累呀18</li>
      <li>学习好累呀19</li>
      <li>学习好累呀20</li>
      <li>学习好累呀21</li>
      <li>学习好累呀22</li>
      <li>学习好累呀23</li>
      <li>学习好累呀24</li>
      <li>学习好累呀25</li>
      <li>学习好累呀26</li>
      <li>学习好累呀27</li>
      <li>学习好累呀28</li>
      <li>学习好累呀29</li>
      <li>学习好累呀30</li>
      <li>学习好累呀31</li>
      <li>学习好累呀32</li>
      <li>学习好累呀33</li>
      <li>学习好累呀34</li>
      <li>学习好累呀35</li>
      <li>学习好累呀36</li>
      <li>学习好累呀37</li>
      <li>学习好累呀38</li>
      <li>学习好累呀39</li>
      <li>学习好累呀40</li>
      <li>学习好累呀41</li>
      <li>学习好累呀42</li>
      <li>学习好累呀43</li>
      <li>学习好累呀44</li>
      <li>学习好累呀45</li>
      <li>学习好累呀46</li>
      <li>学习好累呀47</li>
      <li>学习好累呀48</li>
      <li>学习好累呀49</li>
      <li>学习好累呀50</li>
      <li>学习好累呀51</li>
      <li>学习好累呀52</li>
      <li>学习好累呀53</li>
      <li>学习好累呀54</li>
      <li>学习好累呀55</li>
      <li>学习好累呀56</li>
      <li>学习好累呀57</li>
      <li>学习好累呀58</li>
      <li>学习好累呀59</li>
      <li>学习好累呀60</li>
      <li>学习好累呀61</li>
      <li>学习好累呀62</li>
      <li>学习好累呀63</li>
      <li>学习好累呀64</li>
      <li>学习好累呀65</li>
      <li>学习好累呀66</li>
      <li>学习好累呀67</li>
      <li>学习好累呀68</li>
      <li>学习好累呀69</li>
      <li>学习好累呀70</li>
      <li>学习好累呀71</li>
      <li>学习好累呀72</li>
      <li>学习好累呀73</li>
      <li>学习好累呀74</li>
      <li>学习好累呀75</li>
      <li>学习好累呀76</li>
      <li>学习好累呀77</li>
      <li>学习好累呀78</li>
      <li>学习好累呀79</li>
      <li>学习好累呀80</li>
      <li>学习好累呀81</li>
      <li>学习好累呀82</li>
      <li>学习好累呀83</li>
      <li>学习好累呀84</li>
      <li>学习好累呀85</li>
      <li>学习好累呀86</li>
      <li>学习好累呀87</li>
      <li>学习好累呀88</li>
      <li>学习好累呀89</li>
      <li>学习好累呀90</li>
      <li>学习好累呀91</li>
      <li>学习好累呀92</li>
      <li>学习好累呀93</li>
      <li>学习好累呀94</li>
      <li>学习好累呀95</li>
      <li>学习好累呀96</li>
      <li>学习好累呀97</li>
      <li>学习好累呀98</li>
      <li>学习好累呀99</li>
      <li>学习好累呀100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import homerecommond from './childComps/homerecommond'
import feauture from './childComps/feauture'
import TabControl from '../../components/content/tabcontrol/TavControl'
import {getHomeMultidata,getHomeGoods} from '../../network/home'

export default {
  name:'home',
  components: {
  NavBar,
   HomeSwiper,
   homerecommond,
   feauture,
   TabControl
  
  },
  data() {
    return {
      banners:[],
      recommends:[],
      arr:[1,2,3],
      goods: {
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created() {
  this.getHomeMultidata()
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')
  },

  methods:{
    getHomeMultidata() {
       getHomeMultidata().then(res => {
        this.banners =res.data.data.banner.list
         this.recommends = res.data.data.recommend.list
        //  console.log(11);
         }).catch(err => console.log(err))
    },
    getHomeGoods (type) {
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page+=1
      console.log(res);

        })
    }
    
  }
}
</script>

<style> 
#home {
  padding-top: 44px;
}
 .home-nav {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
z-index: 999;
   background-color: pink;
   color: #fff;
 }
</style>