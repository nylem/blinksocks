'use strict';var _SelectMessage=require('../SelectMessage');var _Constants=require('../Constants');describe('SelectMessage#toBuffer',function(){it('should return the expected buffer',function(){var message=new _SelectMessage.SelectMessage;var buffer=Buffer.from([_Constants.SOCKS_VERSION_V5,_Constants.METHOD_NO_AUTH]);expect(message.toBuffer().equals(buffer)).toBe(true)})});