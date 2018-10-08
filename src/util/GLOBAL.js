var baseFilePath = function (){
  let base_file_path = ''
  if(process.env.NODE_ENV === 'production'){
    base_file_path = 'https://www.fengke.club'
  }else if(process.env.NODE_ENV === 'test'){
    base_file_path = 'http://www.geek-learning.com'
  }else{
    base_file_path = 'http://1t94389h11.imwork.net'
  }
  return base_file_path
}

const GLOBAL_PATCH = {
  BASE_FILE_PATH: baseFilePath()
}

export default GLOBAL_PATCH