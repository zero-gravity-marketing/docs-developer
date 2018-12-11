<script>
	export default{
		data(){
			return{
				dev_hours: '',
				weekly_total: '',
				progress: 0
			}
		},
		computed:{
	    allInputs: function() {
	      // find all inputs
	      let allInputs = document.querySelectorAll('#project-calculation input.input');
	      let totalInputs = allInputs.length;
	      return 100 / totalInputs;
	    },
	    estimatedWeeks: function() {
	    		return (this.dev_hours / 5) / 5;
	    },
	    estimatedWeeksTotal: function() {
	    		return this.estimatedWeeks + (this.estimatedWeeks * .35);
	    }
	  },
	  methods:{
	  	addProgress: function(){
	  		this.progress += this.allInputs;
	  	},
	  }
	}
</script>
<template>
	<div>
		<form id="project-calculation">
			<div class="form-row">
		    <div class="col-md-2">
		    	<div class="form-group">
		    		 <label>Dev Hours</label>
			    		<input id="dev_hours" class="form-control input" type="text" v-model="dev_hours" @focus.once="addProgress()">
		    	</div>
		    </div>
		    <div class="col-md-5">
		    	<div class="form-group">
		    		<label>Estimated Number of Weeks</label>
		    		<input class="form-control-plaintext" readonly type="text" :value="this.estimatedWeeks.toFixed(1)">
		    	</div>
		    </div>
		    <div class="col-md-5">
		    	<div class="form-group">
		    		<label>To Be Safe</label>
		    		<input class="form-control-plaintext" readonly type="text" :value="this.estimatedWeeksTotal.toFixed(1)">
		    	</div>
		    </div>
		  </div>
		</form>

		<div class="progress" style="margin-bottom: 25px;">
  		<div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
		</div>

	</div>
</template>

<style>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>