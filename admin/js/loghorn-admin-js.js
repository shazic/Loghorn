////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	jQuery(document).ready(function($){
		// The below items could be put in a CSS file.
		$(".ui-slider-handle").css("width", 36);
		$(".ui-slider-handle").css("text-align", "center");
		$(".ui-slider-handle").css("font-size", 10);
		$(".ui-slider-handle").css("border-color", "gray");
		$(".ui-slider").css("width", 600);
		$(".ui-slider").css("height", 6);
		// Make  the slider text-box invisible.
		$(".loghorn_slider_textbox").hide();
		// Make the input field for list box selected item invisible.
		$(".loghorn_list_selected_textbox").hide();
		var form_slider_value = 0;
		/////////////////////////////////////////////////   Login Form: Width:  ////////////////////////////////////////////////////////////////
		var form_width_slider = $("#loghorn_form_width_slider");
		var form_width_handle = $( "#loghorn_form_width_handle" );
		form_slider_value = document.getElementById("loghorn_form_width_inp").value;
		form_width_slider.slider({
			min:220, max:800, value:form_slider_value, animate: "fast",
			create: function() {
				form_width_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_width_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_width_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Padding:
		var form_pad_slider = $("#loghorn_form_pad_slider");
		var form_pad_handle = $( "#loghorn_form_pad_handle" );
		form_slider_value = document.getElementById("loghorn_form_pad_inp").value;
		form_pad_slider.slider({
			min:0, max:10, value:form_slider_value, animate: "fast",
			create: function() {
				form_pad_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_pad_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_pad_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Margin:
		var form_mrgn_slider = $("#loghorn_form_mrgn_slider");
		var form_mrgn_handle = $( "#loghorn_form_mrgn_handle" );
		form_slider_value = document.getElementById("loghorn_form_mrgn_inp").value;
		form_mrgn_slider.slider({
			min:0, max:10, value:form_slider_value,
			create: function() {
				form_mrgn_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_mrgn_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_mrgn_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Color Alpha displacement slider:
		var form_colr_alpha_slider = $("#loghorn_form_colr_alpha_slider");
		var form_colr_alpha_handle = $( "#loghorn_form_colr_alpha_handle" );
		form_slider_value = document.getElementById("loghorn_form_colr_alpha_inp").value;
		form_colr_alpha_slider.slider({
			min:0, max:100, value:form_slider_value,
			create: function() {
				form_colr_alpha_handle.text( $( this ).slider( "value" )+"%" );
			},
			slide: function( event, ui ) {
				form_colr_alpha_handle.text( ui.value+"%" );
				document.getElementById("loghorn_form_colr_alpha_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Shadow - Horizontal displacement slider:
		var form_shadow_hor_slider = $("#loghorn_form_shadow_hor_slider");
		var form_shadow_hor_handle = $( "#loghorn_form_shadow_hor_handle" );
		form_slider_value = document.getElementById("loghorn_form_shadow_hor_inp").value;
		form_shadow_hor_slider.slider({
			min:0, max:30, value:form_slider_value,
			create: function() {
				form_shadow_hor_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_shadow_hor_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_shadow_hor_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Shadow - Vertical displacement slider:
		var form_shadow_ver_slider = $("#loghorn_form_shadow_ver_slider");
		var form_shadow_ver_handle = $( "#loghorn_form_shadow_ver_handle" );
		form_slider_value = document.getElementById("loghorn_form_shadow_ver_inp").value;
		form_shadow_ver_slider.slider({
			min:0, max:30, value:form_slider_value,
			create: function() {
				form_shadow_ver_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_shadow_ver_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_shadow_ver_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Shadow - Blur slider:
		var form_shadow_blur_slider = $("#loghorn_form_shadow_blur_slider");
		var form_shadow_blur_handle = $( "#loghorn_form_shadow_blur_handle" );
		form_slider_value = document.getElementById("loghorn_form_shadow_blur_inp").value;
		form_shadow_blur_slider.slider({
			min:0, max:30, value:form_slider_value,
			create: function() {
				form_shadow_blur_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_shadow_blur_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_shadow_blur_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Shadow - Alpha Channel slider:
		var form_shadow_alpha_slider = $("#loghorn_form_shadow_alpha_slider");
		var form_shadow_alpha_handle = $( "#loghorn_form_shadow_alpha_handle" );
		form_slider_value = document.getElementById("loghorn_form_shadow_alpha_inp").value;
		form_shadow_alpha_slider.slider({
			min:0, max:100, value:form_slider_value,
			create: function() {
				form_shadow_alpha_handle.text( $( this ).slider( "value" )+"%" );
			},
			slide: function( event, ui ) {
				form_shadow_alpha_handle.text( ui.value+"%" );
				document.getElementById("loghorn_form_shadow_alpha_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Border - Thickness slider:
		var form_border_thick_slider = $("#loghorn_form_border_thick_slider");
		var form_border_thick_handle = $( "#loghorn_form_border_thick_handle" );
		form_slider_value = document.getElementById("loghorn_form_border_thick_inp").value;
		form_border_thick_slider.slider({
			min:0, max:10, value:form_slider_value,
			create: function() {
				form_border_thick_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_border_thick_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_border_thick_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Border - Alpha Channel slider:
		var form_border_alpha_slider = $("#loghorn_form_border_alpha_slider");
		var form_border_alpha_handle = $( "#loghorn_form_border_alpha_handle" );
		form_slider_value = document.getElementById("loghorn_form_border_alpha_inp").value;
		form_border_alpha_slider.slider({
			min:0, max:100, value:form_slider_value,
			create: function() {
				form_border_alpha_handle.text( $( this ).slider( "value" )+"%" );
			},
			slide: function( event, ui ) {
				form_border_alpha_handle.text( ui.value+"%" );
				document.getElementById("loghorn_form_border_alpha_inp").value=ui.value;
			}
		});
		/////////////////////////////////////////////////   Login Form: Border - Radius slider:
		var form_border_radius_slider = $("#loghorn_form_border_radius_slider");
		var form_border_radius_handle = $( "#loghorn_form_border_radius_handle" );
		form_slider_value = document.getElementById("loghorn_form_border_radius_inp").value;
		form_border_radius_slider.slider({
			min:0, max:50, value:form_slider_value,
			create: function() {
				form_border_radius_handle.text( $( this ).slider( "value" )+"px" );
			},
			slide: function( event, ui ) {
				form_border_radius_handle.text( ui.value+"px" );
				document.getElementById("loghorn_form_border_radius_inp").value=ui.value;
			}
		});
		//
	} );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Media frame to select and upload media files. Code template from Mike Jolley 
	jQuery( document ).ready( function( $ ) {
			// Uploading files
			var file_frame_logo;
			var file_frame_background;
			var wp_media_post_id = wp.media.model.settings.post.id; // Store the old id
			var set_to_post_id = null ;// Set this
			// Clicking on the Logo Selector Button:
			jQuery('#logo_upload_image_button').on('click', function( event ){
				event.preventDefault();
				// If the media frame already exists, reopen it.
				if ( file_frame_logo ) {
					// Set the post ID to what we want
					file_frame_logo.uploader.uploader.param( 'post_id', set_to_post_id );
					// Open frame
					file_frame_logo.open();
					return;
				} else {
					// Set the wp.media post id so the uploader grabs the ID we want when initialised
					wp.media.model.settings.post.id = set_to_post_id;
				}
				// Create the media frame.
				file_frame_logo = wp.media.frames.file_frame_logo = wp.media({
					title: 'Select an image to use as the logo',
					button: {
						text: 'Use this image',
					},
					multiple: false	// We set multiple to false so only get one image from the uploader
				});
				// When an image is selected, run a callback.
				file_frame_logo.on( 'select', function() {
					// We set multiple to false so only get one image from the uploader
					attachment = file_frame_logo.state().get('selection').first().toJSON();
					// Set the HTML attributes 
					$( '#logo-image-preview' ).attr( 'src', attachment.url );
					$( '#logo_image_src' ).attr( 'href', attachment.url );
					$( '#image_attachment_id' ).val( attachment.id );
					// Restore the main post ID
					wp.media.model.settings.post.id = wp_media_post_id;
				});
					// Finally, open the modal
					file_frame_logo.open();
			});
			// Clicking on the Background Selector Button:
			jQuery('#bg_upload_image_button').on('click', function( event ){
				event.preventDefault();
				// If the media frame already exists, reopen it.
				if ( file_frame_background ) {
					// Set the post ID to what we want
				file_frame_background.uploader.uploader.param( 'post_id', set_to_post_id );
					// Open frame
				file_frame_background.open();
					return;
				} else {
					// Set the wp.media post id so the uploader grabs the ID we want when initialised
					wp.media.model.settings.post.id = set_to_post_id;
				}
				// Create the media frame.
				file_frame_background = wp.media.frames.file_frame_background = wp.media({
					title: 'Select an image to use as the background',
					button: {
						text: 'Use this image',
					},
					multiple: false	// We set multiple to false so only get one image from the uploader
				});
				// When an image is selected, run a callback.
				file_frame_background.on( 'select', function() {
					// We set multiple to false so only get one image from the uploader
					attachment = file_frame_background.state().get('selection').first().toJSON();
					// Set the HTML attributes 
					$( '#bg-image-preview' ).attr( 'src', attachment.url );
					$( '#bg_image_src' ).attr( 'href', attachment.url );
					$( '#bg_image_attachment_id' ).val( attachment.id );
					// Restore the main post ID
					wp.media.model.settings.post.id = wp_media_post_id;
				});
					// Finally, open the modal
					file_frame_background.open();
			});
			// Restore the main ID when the add media button is pressed
			jQuery( 'a.add_media' ).on( 'click', function() {
				wp.media.model.settings.post.id = wp_media_post_id;
			});
		});
	///////////////////////////////////////  List item	
	function loghorn_form_border_style_onchange()	{
		document.getElementById("loghorn_form_border_style_textbox").value= document.getElementById("loghorn_form_border_style_listbox").value;
	}