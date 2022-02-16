import { Router } from 'express'

import github from './github'
import google from './google'
import facebook from './facebook'
import twitter from './twitter'
import apple from './apple'
import windowslive from './windowslive'
import linkedin from './linkedin'

const router = Router()

github(router)
google(router)
facebook(router)
twitter(router)
apple(router)
windowslive(router)
linkedin(router)

export default router
