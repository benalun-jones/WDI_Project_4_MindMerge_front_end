angular 
  .module('MindMergeApp')
  .factory('User', User);

  User.$inject = ['$resource'];

  function User($resource){
    var User = $resource('API_URL'+'/users/:id', null, {
      'update': { method:'PATCH' },
      'create': { method: 'post' }
    });

    return User;


  }