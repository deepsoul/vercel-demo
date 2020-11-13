
<template>
  <div>
    <h1 class="headline">Cookies Doodle</h1>
    <div class="qr-codes" v-if="showQR">
        <QR :name="'boris'" />
        <QR :name="'jacky'" />
    </div>
    <div v-else class="counter">
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
import QR from './atoms/QR';
import Counter from './atoms/Counter';
export default {
    components : {
        Counter,
        QR
    },
  data() {
    return {
      showQR: true,
      bCount : 0,
      jCount: 0
    };
  },
  methods: {
      onAddDoodle(user) {
            const db = this.$firebase.firestore();
             let doodle = {}
            if(user === 'boris') {
                this.showQR = false;
                doodle = {boris: 1, jacky: 0}
            }else if(user === 'jacky') {
                this.showQR = false;
                doodle = {boris: 0, jacky: 1}
            }
            if(user === 'boris' || user === 'jacky') {
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
            
      }
  },
  created() {
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    this.onAddDoodle(params.get("enc"));

  const db = this.$firebase.firestore();
            db
            .collection('cookies')
            .onSnapshot((snapshotChange) => {
               
                let bCount = 0;
                let jCount = 0;
                snapshotChange.forEach((doc) => {
                    if(doc.data().boris || doc.data().jacky) {
                    bCount += doc.data().boris;
                    jCount += doc.data().jacky;

                    }
                    
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
             if(doc.data().boris || doc.data().jacky) {
          bCount += doc.data().boris;
          jCount += doc.data().jacky;
             }
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

.qr-codes {
    .qr {
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