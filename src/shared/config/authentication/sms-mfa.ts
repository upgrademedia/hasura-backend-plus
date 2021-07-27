import { castBooleanEnv } from '../utils'

// SMS Multi-Factor Authentication configuration
export const SMS_MFA = {
  get ENABLE() {
    return castBooleanEnv('SMS_MFA_ENABLE', true)
  },
  get OTP_ISSUER() {
    return process.env.SMS_OTP_ISSUER || 'HBP'
  },
  get SNS_API_VERSION() {
    return process.env.SNS_API_VERSION || '2010-03-31'
  },
  get AWS_ACCESS_KEY_ID() {
    return process.env.SNS_AWS_ACCESS_KEY_ID || ''
  },
  get AWS_SECRET_ACCESS_KEY() {
    return process.env.SNS_AWS_SECRET_ACCESS_KEY || ''
  },
  get SNS_REGION() {
    return process.env.SNS_REGION || ''
  }
}
