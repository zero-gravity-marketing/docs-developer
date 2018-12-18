<script>
	export default{
		data(){
			return{
				build_start: '',
				build_end: '',
				dev_link: '',
				internal_qa_start: '',
				internal_qa_end: '',
				external_qa_start: '',
				external_qa_end: '',
				launch: '',
				progress: 0
			}
		},
		computed:{
	    formIsValid() {
	      return this.build_start && this.build_end && this.dev_link && this.launch;
	    },
	    allInputs: function() {
	      // find all inputs
	      let allInputs = document.querySelectorAll('#project-timeline input');
	      let totalInputs = allInputs.length;
	      return 100 / totalInputs;
	    }
	  },
	  methods:{
	  	addProgress: function(){
	  		//this.progress += 12.5;
	  		this.progress += this.allInputs;
	  	},
	  	parseDate: function(date){
	  		let thisDate = new Date(date + 'EST');
	  		return thisDate.toDateString();
	  	}
	  }
	}
</script>
<template>
	<div>
		<form id="project-timeline">
			<div class="form-row">
		    <div class="col-md-6">
		    	<div class="form-group">
		    		 <label>Build Start</label>
			    		<input id="build_start" class="form-control" type="date" v-model="build_start" @focus.once="addProgress()">
		    	</div>
		    </div>
		    <div class="col-md-6">
		    	<div class="form-group">
		    		<label>Build End</label>
		    		<input id="build_end" class="form-control" type="date" v-model="build_end" @focus.once="addProgress()">
		    	</div>
		    </div>
		  </div>
		  <div class="form-row">
		  	<div class="col-md-6">
		  		<div class="form-group">
				    <label>Internal QA Start</label>
				    <input id="internal_qa_start" class="form-control" type="date" v-model="internal_qa_start" @focus.once="addProgress()">
				  </div>
				</div>
				<div class="col-md-6">
				  <div class="form-group">
				    <label>Internal QA End</label>
				    <input id="internal_qa_end" class="form-control" type="date" v-model="internal_qa_end" @focus.once="addProgress()">
				  </div>
		  	</div>
		  </div>
		  <div class="form-row">
				<div class="col-md-12">
					<div class="form-group">
		    		<label>Dev Link</label>
		    		<input id="dev_link" class="form-control" type="date" v-model="dev_link" @focus.once="addProgress()">
		  		</div>
				</div>		  	
		  </div>
		  <div class="form-row">
		  	<div class="col-md-6">
		  		<div class="form-group">
				    <label>External QA Start</label>
				    <input id="external_qa_start" class="form-control" type="date" v-model="external_qa_start" @focus.once="addProgress()">
				  </div>
				</div>
				<div class="col-md-6">
				  <div class="form-group">
				    <label>External QA End</label>
				    <input id="external_qa_end" class="form-control" type="date" v-model="external_qa_end" @focus.once="addProgress()">
				  </div>
		  	</div>
		  </div>
		  <div class="form-row">
		  	<div class="col-md-12">
		  		<div class="form-group">
				    <label>Launch</label>
				    <input id="launch" class="form-control" type="date" v-model="launch" placeholder="" @focus.once="addProgress()">
				  </div>
		  	</div>
		  </div>
		</form>

		<div class="progress" style="margin-bottom: 25px;">
  		<div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
		</div>

				<!-- Button trigger modal -->
		<transition name="fade">
			<button v-if="progress === 100"
			type="button" class="btn btn-success" data-toggle="modal" data-target="#projectTimeline">
			  Copy Project Timeline
			</button>
		</transition>

		<!-- Modal -->
		<div class="modal fade" id="projectTimeline" tabindex="-1" role="dialog" aria-labelledby="projectTimelineLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="projectTimelineLabel">Project Timeline</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <ul>
							<li><strong>Build Start:&nbsp;</strong>{{this.parseDate(build_start)}}</li>
							<li><strong>Build End:&nbsp;</strong>{{this.parseDate(build_end)}}</li>
							<li><strong>Dev Link:&nbsp;</strong>{{this.parseDate(dev_link)}}</li>
							<li><strong>Internal QA:&nbsp;</strong>{{this.parseDate(internal_qa_start)}} - {{this.parseDate(internal_qa_end)}}</li>
							<li><strong>External QA:&nbsp;</strong>{{this.parseDate(external_qa_start)}} - {{this.parseDate(external_qa_end)}}</li>
							<li><strong>Launch:&nbsp;</strong>{{this.parseDate(launch)}}</li>
						</ul>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
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