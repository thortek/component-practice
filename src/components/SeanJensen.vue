<template>
    <v-container>
        <div id="title-div">
            <h1 class="glow">DE<span class="offset">V</span>ELOPMENT</h1>
        </div>
    </v-container>

</template>

<script>

export default {
    
}
</script>

<style scoped>
#title-div {
  text-align:center;
  border:5px solid #1086e8;
  width:700px;
  top:150px;
  border-radius:20px;
  margin: auto;
  animation: border-flicker 2s linear infinite;
}

#title-div h1 {
  color:#ff5e00;;
  font-family: 'Raleway', sans-serif;
  font-size:64px;
  letter-spacing:10px;
  animation: text-flicker 3s linear infinite;
}

.offset {
  animation: letter-flicker 2s linear infinite;
}

@keyframes text-flicker {
  0% {
    opacity:0.8;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  
  2% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  8% {
    opacity:0.6;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  9% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  12% {
    opacity:0.5;
    text-shadow: 0px 0px rgba(242, 22, 22, 1);
  }
  20% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  25% {
    opacity:0.8;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  30% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  70% {
    opacity:0.7;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  72% {
    opacity:0.9;
    text-shadow:0px 0px 29px rgba(242, 22, 22, 1)
  }
  
  77% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
}

@keyframes border-flicker {
  0% {
    opacity:0.4;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
  2% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
  4% {
    opacity:0.4;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
  
  8% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
  70% {
    opacity:0.7;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
  100% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
  }
}

@keyframes letter-flicker {
  0% {
    opacity:0.4;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  2% {
    opacity:0.4;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  4% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  
  
  19% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  21% {
    opacity:0.4;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  23% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  
  80% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  83% {
    opacity:0.4;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  87% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
}
</style>