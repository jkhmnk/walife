/**
 * 通常我们建议使用常量去命名一个 mutation, 并且把这些常量放在单独的地方。这样做可以让你的代码合作者对整个 app 包含的 mutations 一目了然
 *
 * 用不用常量取决于你 —— 在需要多人协作的大型项目中，这会很有帮助
 **/
// router
export const ROUTER_CHANGE = 'router/ROUTE_CHANGED'
// pagination
export const PAGINATION_CHANGE = 'pagination/CHANGE'
// form
export const FORM_SET = 'form/SET'
export const FORM_CHANGE = 'form/CHANGE'

// account
export const ACCOUNT_GET_ACCOUNT_LIST_SUCCESS = 'account/GET_ACCOUNT_LIST_SUCCESS'

// role
export const ROLE_GET_ROLE_LIST_SUCCESS = 'role/GET_ROLE_LIST_SUCCESS'
export const ROLE_GET_COMPETENCE_TREE_SUCCESS = 'role/GET_COMPETENCE_TREE_SUCCESS'

// department
export const DEPARTMENT_GET_DEPARTMENT_LIST_SUCCESS = 'department/GET_DEPARTMENT_LIST_SUCCESS'

// title
export const TITLE_GET_TITLE_LIST_SUCCESS = 'title/GET_TITLE_LIST_SUCCESS'

// medicalcare
export const MEDICALCARE_GET_MEDICALCARE_LIST_SUCCESS = 'medicalCare/GET_MEDICALCARE_LIST_SUCCESS'
export const MEDICALCARE_GET_ASSISTANT_LIST_SUCCESS = 'medicalCare/GET_ASSISTANT_LIST_SUCCESS'
export const MEDICALCARE_GET_PATIENT_LIST_SUCCESS = 'medicalCare/GET_PATIENT_LIST_SUCCESS'
export const INSTITUTION_LIST_ALL_SUCCESS = 'medicalCare/INSTITUTION_LIST_ALL_SUCCESS'
export const USER_TYPES_SUCCESS = 'medicalCare/USER_TYPES_SUCCESS'
export const CERTIFICATION_STATUS_SUCCESS = 'medicalCare/CERTIFICATION_STATUS_SUCCESS'
export const TITLE_LIST_ALL_SUCCESS = 'medicalCare/TITLE_LIST_ALL_SUCCESS'
export const DEPARTMENT_LIST_ALL_SUCCESS = 'medicalCare/DEPARTMENT_LIST_ALL_SUCCESS'

// login
export const ACCOUNT_CURRENT_USER = 'login/ACCOUNT_CURRENT_USER' // 获取当前登录用户
export const REST_CHECK_LOGIN = 'login/REST_CHECK_LOGIN' // 检查是否登录

// loadding
export const LOADING_ADD = 'app/LOADING_ADD'
export const LOADING_MIN = 'app/LOADING_MIN'

// menu
export const GET_MENU = 'left/GET_MENU'
