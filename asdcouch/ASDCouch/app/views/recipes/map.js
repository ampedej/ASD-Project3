function(doc) {
  if (doc._id.substr(0,7) === "recipe:"){
  	emit(doc._id.substr(7), {
  		"Name": doc.rname,
  		"Rating": doc.rating,
  		"Type": doc.rtype
  		});
  	}
};