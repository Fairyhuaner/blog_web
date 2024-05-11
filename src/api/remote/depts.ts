import request from '@/plugins/axios/request'
import { apis } from '@/api/apis'

export function getDepts() {
  return request.get<ResponseResult>(apis.depts)
}
