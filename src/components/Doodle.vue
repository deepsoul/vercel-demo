
<template>
  <div>
    <h1 class="headline">Cookies Doodle</h1>
    <div class="counter">
        <Counter v-if="bCount > 0" :count="bCount" :name="'Boris'" />
        <Counter v-if="jCount > 0" :count="jCount" :name="'Jacky'" />
    </div>
    <div class="button">
    <button @click="onAddDoodle('boris')">Vote Boris</button>
    <button @click="onAddDoodle('jacky')">Vote Jacky</button>
    </div>
    
  
  </div>
</template>

<script>
import Counter from './atoms/Counter';
export default {
    components : {
        Counter
    },
  data() {
    return {
      testCollection: [],
      bCount : 0,
      jCount: 0
    };
  },
  methods: {
      onAddDoodle(user) {
            const db = this.$firebase.firestore();
             let doodle = {}
            if(user === 'boris') {
                doodle = {boris: 1, jacky: 0}
            }else {
                doodle = {boris: 0, jacky: 1}
            }

            db
            .collection('cookies')
            .add(doodle).then(() => {
                    // eslint-disable-next-line no-console
                    console.log("allright")
                }).catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                });
      }
  },
  created() {
  const db = this.$firebase.firestore();
            db
            .collection('cookies')
            .onSnapshot((snapshotChange) => {
               
                let bCount = 0;
                let jCount = 0;
                snapshotChange.forEach((doc) => {
                    bCount += doc.data().boris;
                    jCount += doc.data().jacky;
                });

                this.bCount = bCount;
                this.jCount = jCount;

            })
        },

  mounted() {
    const db = this.$firebase.firestore();
    db
      .collection('cookies')
      .get()
      .then(snap => {
        let bCount = 0;
        let jCount = 0;
        snap.forEach(doc => {
          bCount += doc.data().boris;
          jCount += doc.data().jacky;
         
        });

        this.bCount = bCount;
                this.jCount = jCount;
  
      });
  },
};
</script>

<style lang="scss">
h1.headline {
    font-size: 64px;
    margin-top: 16px;
    color: #206fb7;
}
.counter {
    display: flex;
    flex-direction: row;
    align-items: center;
   justify-content: center;

   .card {
       margin:1em;
   }
}

.button {
    display: flex;
    flex-direction: row;
    align-items: center;
   justify-content: center;

   button {
       margin: 1em;
   }

}
</style>