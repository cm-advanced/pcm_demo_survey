$( document ).ready( function() {
	if ( Drupal && Drupal.settings ) {
    if ( Drupal.settings.pcm_demo_survey.demo_survey_nid && Drupal.settings.pcm_demo_survey.demo_survey_event_id ) {
      $( "#dialog-confirm" ).dialog({
				resizable: false,
				modal: true,
				buttons: {
					"Take Survey": function() {
						//window.location.href = "/node/" + Drupal.settings.pcm_demo_survey.demo_survey_nid + "/" + Drupal.settings.pcm_demo_survey.demo_survey_event_id;
						window.open("/node/" + Drupal.settings.pcm_demo_survey.demo_survey_nid + "/" + Drupal.settings.pcm_demo_survey.demo_survey_event_id);
						$( this ).dialog( "close" );
					},
					Cancel: function() {
						$( this ).dialog( "close" );
					}
				}
			});
    }
  }
});