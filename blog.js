$("document").ready(function(){
  $("#hide").click(function(){
      $(this).hide();
  });
  $("#sortable").accordion({
    collapsible:true,
    active:false
  });
    .sortable();
});
