<template>
  <div id="param-info" v-if="Object.keys(itemParams).length !== 0">
        <table v-for="(table,index) in itemParams.rule.tables" :key="index"  cellpadding="0" cellspacing="0" >
            <tr v-for="(info,indey) in table" :key="indey">
                <td v-for="(item,indec) in info" :key="indec">{{item}}</td>
            </tr>
        </table>

        <table>
            <tr v-for="(canshu,indez) in itemParams.info.set" :key="indez" cellpadding="0" cellspacing="0" >
                <td class="dd">{{canshu.key}}</td>
                <td>{{canshu.value}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
    name:'detailitemparmas',

    props:{
         itemParams:{
            type:Object,
            default() {
                return {}
            }
        }
    },
}
</script>

<style>
    table {
        width:100%;
          margin-top: 20px;
    }
    table td {
        /* margin-bottom: 3px; */
      
        border-bottom: 1px solid #ccc;
    }
    .dd {
        width: 72px;
    }
</style>