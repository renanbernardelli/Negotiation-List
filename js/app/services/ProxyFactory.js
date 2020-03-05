class ProxyFactory {

    static create(object, props, act) {

        return new Proxy(object, {

            get: function(target, prop, receiver) {
                
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {

                    return function() {
                        
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return act(target);
                        
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set: function(target, prop, value, receiver) {

                if (props.includes(prop)) {
                    
                    act(target);
                }

                return Reflect.set(target, prop, value, receiver);
            }
        })
    }

    static _isFunction(func) {

        return typeof(func) == typeof(Function);
    }
}