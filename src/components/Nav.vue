<template>
    <div class="nav">
        <router-link to="/cake"><span>蛋糕</span></router-link>
        <router-link to="/iceCream"><span>冰淇凌</span></router-link>
        <router-link to="/coffee"><span>咖啡&下午茶</span></router-link>
        <router-link to="/gift"><span>设计师礼品</span></router-link>
    </div>
</template>

<style scoped lang="less">
*{
    margin: 0;
    padding:0;
}
a{
    text-decoration: none
}
    .nav {
        width: 100%;
        height: .4rem;
        display: flex;
        a {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: center;
            span {
                color: #482615;
                font-size: .14rem;
            }
        }
    }
</style>