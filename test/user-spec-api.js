require ('co-mocha');
require('should');
var data =  require ('../user-data.js');
describe ('user data',function(){
	it('should have +1 user count after saving',function* (){
		var users = yield data.users.get();
		
		console.log(users);

		
		yield data.users.save({name: 'John'});
		
		var newUsers =  newUsers.length.should.equal(users.length + 1);
		
	});

	
});
