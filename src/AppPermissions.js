import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

const PLATFORM_CAMERA_PERMISSIONS = {
    android: PERMISSIONS.ANDROID.CAMERA
}

const REQUEST_PERMISSION_TYPE = {
    camera: PLATFORM_CAMERA_PERMISSIONS
}

const PERMISSION_TYPE = {
    camera: 'camera'
}

class AppPermission {

    checkPermission = async (type): Promise<boolean> => {
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        if(!permissions){
            return true
        }
        try {
            const result = await check(permissions)
            if(result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions)// request permision
        } catch (error) {
            return false
        }
    }

    requestPermission = async (permissions): Promise<boolean> => {
        try {
            const result = await request(permissions)
            return result === RESULTS.GRANTED
        } catch (error) {
            return false
        }
    }
}

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}