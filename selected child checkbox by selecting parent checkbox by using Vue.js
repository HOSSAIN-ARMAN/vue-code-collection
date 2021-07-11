                 <div>
                    <table class="reportTable">
                            <thead>
                            <tr>
                                <th class="blue lighten-5">name</th>
                                <th class="blue lighten-5">sub_name</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="item in items">
                                <tr v-for="(subitem, index) in item.sub" :key="subitem.id">

                                    <td v-if="index === 0" :rowspan="item.sub.length" class="s">{{ item.name }} ||
                                       <input type="checkbox" @click="selectChecked(item.sub.length)">
                                    </td>

                                    <td>{{ subitem.name }} ||
                                       <input type="checkbox" v-if="item.sub.length === length" :checked="isChecked">
                                       <input type="checkbox" v-else="item.sub.length !== length" :checked="false">
                                    </td>
                                </tr>
                            </template>
                            </tbody>

                    </table>
                </div>



-------------------------------------
                                         
    data() {
        return {
            isChecked : false,
            length : "",

            items : [
                {
                    id:"1",
                    name:"a",
                    sub:[
                        {id:"1#1",name:"b"},
                        {id:"1#2",name:"c"},
                    ]
                },
                {
                    id:"2",
                    name:"d",
                    sub:[
                        {id:"2#1",name:"e"},
                        {id:"2#2",name:"f"},
                        {id:"2#3",name:"g"},
                    ]
                }
            ],
          
        }
     },
       
       method: {
         selectChecked(length){
            this.length = length;
            this.isChecked = !this.isChecked;


         // for(var i = 0; i<length; i++){
         //    alert(i);
         //    this.indexValue = i;
         // }
           
           
        },
       }
