module.exports = {
    env: {
        "browser": true
    },
    parserOptions: {
        sourceType: 'module'
    },
    // 扩展推荐规则
    extends: "eslint:recommended",
    // 定制具体规则，可覆盖extends
    rules: {
        // Possible Errors
        'no-console': [0],   
        'no-debugger': [1],     // warn
        'no-empty': [1, { allowEmptyCatch: true }],  // 允许例外-空catch
        'no-extra-boolean-cast': [0],  // 目前定的代码规则里是允许强制布尔转换的
        'no-prototype-builtins': [1],   // 再看看
        'no-unreachable': [1],   // 用默认规则也可以即2级别
        'no-unsafe-finally': [2],    // 推荐2
        'use-isnan': [2],    // 推荐2
        'valid-typeof': [2],    // 推荐2


        // Best Practices
        'curly': [2],  // 建议配置为2，强制要求使用大括号，即使只有一条语句,
        'default-case': [2],  
        'dot-location': [1, 'property'],
        'dot-notation': [1],
        'eqeqeq': [0],   // 接口定义时，明确类型
        'no-alert': [0],  
        'no-caller':[2],
        'no-eq-null': [1],
        'no-eval': [2],  
        'no-extend-native': [1],
        'no-extra-bind':[1],  // 建议warn级别
        'no-implied-eval': [2],
        'no-magic-numbers': [0],
        'no-multi-spaces': [1],
        'no-multi-str': [1],
        'no-octal': [1],
        'no-param-reassign': [1], // 配置允许修改属性
        'no-useless-call':[1],


        // Strict Mode

        // Variables
        'no-catch-shadow': [2],
        'no-undef': [1],    // 建议改成warn
        'no-unused-vars': [2],  
        'no-undefined': [2],

        // Node.js and CommonJS

        // Stylistic Issues
        'object-curly-spacing': [1, 'always'],
        'func-style': [0], // @unsupport export function test()
    },
};