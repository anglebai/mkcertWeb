/**
 * 极简 i18n - 零代码侵入方案
 * 使用方式: 在 HTML 中引入此脚本，自动插入语言切换按钮并翻译页面
 * 
 * 使用说明：
 * 1. 静态文本自动翻译（页面加载时）
 * 2. 动态内容使用 window.t('文本') 函数手动翻译
 * 3. 添加新词条：在 translations 对象中添加键值对
 * 4. 无需修改 HTML，只需添加 <script src="i18n-minimal.js"></script>
 */
(function() {
    'use strict';

    // 翻译词典（可扩展）
    const translations = {
        // ========== 通用文本 ==========
        'mkcert Web UI': 'mkcert Web 界面',
        'Manage SSL certificates with mkcert CLI': '使用 mkcert 管理 SSL 证书',
        'Light Mode': '浅色模式',
        'Dark Mode': '深色模式',
        'Logout': '退出',
        
        // ========== 导航菜单 ==========
        'Certificate Manager': '证书管理',
        'SCEP Service': 'SCEP 服务',
        'Settings': '设置',
        
        // ========== 页面标题和状态 ==========
        'System Status': '系统状态',
        'Checking mkcert status...': '正在检查 mkcert 状态...',
        'Root Certificate Authority': '根证书颁发机构',
        'Loading CA information...': '正在加载 CA 信息...',
        'mkcert not installed': '未安装 mkcert',
        'mkcert installed': '已安装 mkcert',
        'Root CA installed': '根证书颁发机构已安装',
        'Root CA missing': '根证书颁发机构缺失', 
        'OpenSSL not available': 'OpenSSL 不可用', 
        'mkcert auto-generated': 'mkcert 自动生成',
        'mkcert not auto-generated': 'mkcert 未自动生成',
        'mkcert not installed': '未安装 mkcert',   
        'mkcert installed': '已安装 mkcert',
        'Root CA exists': '根证书颁发机构已存在',
        'Root CA missing': '根证书颁发机构缺失',

        // ========== 证书生成 ==========
        'Generate New Certificate': '生成新证书',
        'Domains (one per line):': '域名/IP（每行一个）：',
        'Enter domain names, IP addresses, or wildcards. One per line.': '输入域名、IP 地址或通配符。每行一个。',
        'Certificate Format:': '证书格式：',
        'PEM/CRT for servers, P12 for browsers/email. P12 Client includes client authentication flag for S/MIME.': 'PEM/CRT 用于服务器，P12 用于浏览器/邮件。P12 客户端包含 S/MIME 的客户端认证标志。',
        'Generate Certificate': '生成证书',
        'Generating...': '生成中...',
        
        // ========== 证书上传 ==========
        'Upload Certificate Files': '上传证书文件',
        'Drag & Drop Certificate Files': '拖放证书文件',
        'or click to select files': '或点击选择文件',
        'Supported: .pem, .crt, .key, .cer files': '支持：.pem, .crt, .key, .cer 文件',
        'Uploading files...': '上传文件中...',
        
        // ========== 通知和监控 ==========
        'Notifications & Monitoring': '通知与监控',
        'Email Notifications': '邮件通知',
        'Checking email configuration...': '正在检查邮件配置...',
        'Send Test Email': '发送测试邮件',
        'Verify SMTP': '验证 SMTP',
        'Sending...': '发送中...',
        'Verifying...': '验证中...',
        'Certificate Monitoring': '证书监控',
        'Checking monitoring status...': '正在检查监控状态...',
        'Check Now': '立即检查',
        'Start Monitoring': '启动监控',
        'Stop Monitoring': '停止监控',
        'Checking...': '检查中...',
        'Starting...': '启动中...',
        'Stopping...': '停止中...',
        'Expiring Certificates': '即将过期的证书',
        'Configure email and monitoring settings in the Settings page': '在设置页面配置邮件和监控设置',
        
        // ========== 证书列表 ==========
        'Existing Certificates': '已有证书',
        'Refresh': '刷新',
        'Loading certificates...': '加载证书中...',
        'Failed to load certificates': '加载证书失败',
        'No certificates found': '未找到证书',
        
        // ========== 表单标签 ==========
        'Domains/IPs': '域名/IP地址',
        'Format': '格式',
        'Generate': '生成',
        'Install Root CA': '安装根证书',
        'Cancel': '取消',
        
        // ========== 登录页面 ==========
        'Username': '用户名',
        'Password': '密码',
        'Login': '登录',
        'Secure Access Required': '需要安全访问',
        'Invalid username or password. Please try again.': '用户名或密码无效，请重试。',
        'Please enter both username and password.': '请输入用户名和密码。',
        'Return to Home': '返回首页',
        
        // ========== 提示信息 ==========
        'The mkcert root Certificate Authority (CA) is not installed': 'mkcert 根证书颁发机构(CA)未安装',
        'You need to install it to create trusted certificates for local development': '您需要安装它以创建用于本地开发的可信证书',
        'Installing...': '安装中...',
        'Failed to load system status: ': '加载系统状态失败：',
        'Failed to load Root CA information: ': '加载根 CA 信息失败：',
        
        // ========== 按钮和操作 ==========
        'Download': '下载',
        'Delete': '删除',
        'View': '查看',
        'Details': '详情',
        'Copy': '复制',
        'Copied!': '已复制！',
        'Error': '错误',
        'Success': '成功',
        'Warning': '警告',
        'Info': '提示',
        'Close': '关闭',
        'Save': '保存',
        'Edit': '编辑',
        'Confirm': '确认',
        'Yes': '是',
        'No': '否',
        'OK': '确定',
        
        // ========== Root CA 相关消息 ==========
        'Root CA Not Found': '未找到根证书颁发机构(CA)',
        'A Root Certificate Authority (CA) is required to generate SSL certificates. You can generate one now.': '生成 SSL 证书需要根证书颁发机构(CA)。您现在可以生成一个。',
        'What this does:': '此操作将执行：',
        'Creates a new Root Certificate Authority': '创建新的根证书颁发机构',
        'Installs it in your system trust store': '将其安装到系统信任存储中',
        'Enables certificate generation for local development': '启用本地开发的证书生成功能',
        'Generate Root CA': '生成根证书颁发机构',
        'Generating Root CA...': '正在生成根证书颁发机构...',
        'Root CA Auto-Generated!': '根证书颁发机构已自动生成！',
        'Root CA exists': '根证书颁发机构已存在',
        'Root CA missing': '根证书颁发机构缺失',
        'Download Root CA': '下载根证书颁发机构',
        'Install Root CA': '安装根证书颁发机构',
        'Installing...': '安装中...',
        'Install CA': '安装 CA',
        'Root CA certificates cannot be archived': '根证书颁发机构证书无法归档',
        
        // ========== 上传状态 ==========
        'Failed': '失败',
        'Uploaded': '已上传',
        'Error': '错误',
        
        // ========== 其他动态消息 ==========
        'This is your mkcert Root CA certificate. Install this certificate in your system\'s trust store to enable local HTTPS development with automatically trusted certificates.': '这是您的 mkcert 根证书颁发机构证书。将此证书安装到系统的信任存储中，以启用自动受信任证书的本地 HTTPS 开发。',
        
        // ========== 错误和成功消息 ==========
        'Failed to load CA information: ': '加载 CA 信息失败：',
        'Please enter at least one domain': '请至少输入一个域名',
        'Certificate generated successfully for: ': '证书生成成功：',
        'Failed to generate certificate: ': '生成证书失败：',
        'Failed to load certificates: ': '加载证书失败：',
        'Root certificates are read-only and cannot be deleted': '根证书是只读的，无法删除',
        'Certificate ": " deleted permanently': '证书已永久删除',
        'Failed to delete certificate: ': '删除证书失败：',
        'Interface SSL certificates cannot be archived': '接口 SSL 证书无法归档',
        'Legacy certificates may be read-only and cannot be archived': '旧版证书可能是只读的，无法归档',
        'Certificate ": " archived successfully': '证书归档成功',
        'Certificate ": " restored successfully': '证书恢复成功',
        'Failed to generate CA: ': '生成 CA 失败：',
        'Root CA installed successfully': '根证书颁发机构安装成功',
        'Failed to install CA: ': '安装 CA 失败：',
        'No valid certificate files selected.': '未选择有效的证书文件。',
        'Upload failed: ': '上传失败：',
        'Download failed: ': '下载失败：',
        'PFX file generated and downloaded successfully': 'PFX 文件生成并下载成功',
        'PFX generation failed: ': 'PFX 生成失败：',
        'SMTP connection verified successfully!': 'SMTP 连接验证成功！',
        'Certificate expiry check completed successfully!': '证书过期检查完成！',
        'Failed to send test email: ': '发送测试邮件失败：',
        'Test email sent successfully! Check your inbox.': '测试邮件发送成功！请检查收件箱。',
        'Monitoring started successfully': '监控启动成功',
        'Failed to start monitoring: ': '启动监控失败：',
        'Monitoring stopped successfully': '监控停止成功',
        'Failed to stop monitoring: ': '停止监控失败：',
        'Settings saved successfully': '设置保存成功',
        'Failed to save settings: ': '保存设置失败：',
        'Settings reset to defaults successfully': '设置已重置为默认值',
        'Failed to reset settings: ': '重置设置失败：',
        'Configuration exported successfully': '配置导出成功',
        'Configuration imported successfully': '配置导入成功',
        'Failed to import configuration: ': '导入配置失败：',
        
        // ========== 设置页面 - 完整补充 ==========
        'Settings configured here will override values from your .env file and persist across server restarts.': '此处设置的配置将覆盖 .env 文件中的值，并在服务器重启后保持不变。',
        
        // 服务器配置
        'Server Configuration': '服务器配置',
        'Port for HTTP server (default: 3000)': 'HTTP 服务器端口（默认：3000）',
        'Port for HTTPS server (default: 3443)': 'HTTPS 服务器端口（默认：3443）',
        'Server hostname (default: localhost)': '服务器主机名（默认：localhost）',
        'Domain name for SSL certificate': 'SSL 证书的域名',
        'Force HTTPS (Redirect HTTP to HTTPS)': '强制 HTTPS（将 HTTP 重定向到 HTTPS）',
        
        // 路径配置
        'Paths Configuration': '路径配置',
        'Directory for certificate storage (default: certificates)': '证书存储目录（默认：certificates）',
        'Uploaded Certificates Directory': '已上传证书目录',
        'Directory for uploaded certificates': '已上传证书目录',
        
        // 基本认证
        'Basic Authentication': '基本认证',
        'Enable Basic Authentication': '启用基本认证',
        'Username for authentication': '认证用户名',
        'Password for authentication': '认证密码',
        'Session Secret': '会话密钥',
        'Secret key for session encryption (change in production!)': '会话加密的密钥（生产环境中请修改！）',
        
        // OIDC SSO
        'OpenID Connect (OIDC) SSO': 'OpenID Connect (OIDC) 单点登录',
        'Enable OIDC SSO Authentication': '启用 OIDC SSO 认证',
        'OIDC Issuer URL': 'OIDC 颁发者 URL',
        "Your OIDC provider's issuer URL": '您的 OIDC 提供商的颁发者 URL',
        'OIDC application client ID': 'OIDC 应用程序客户端 ID',
        'Client Secret': '客户端密钥',
        'OIDC application client secret': 'OIDC 应用程序客户端密钥',
        'Callback URL': '回调 URL',
        'Callback URL registered in your OIDC provider': '在 OIDC 提供商中注册的回调 URL',
        'Scopes': '作用域',
        'Space-separated list of scopes': '空格分隔的作用域列表',
        
        // 速率限制
        'Rate Limiting Settings Panel': '速率限制设置面板',
        'CLI Rate Limiting': 'CLI 速率限制',
        'Time Window (milliseconds)': '时间窗口（毫秒）',
        'Rate limit window in ms (default: 900000 = 15 minutes)': '速率限制窗口，单位毫秒（默认：900000 = 15 分钟）',
        'Max Requests': '最大请求数',
        'Maximum CLI operations per window (default: 10)': '每个窗口的最大 CLI 操作数（默认：10）',
        'API Rate Limiting': 'API 速率限制',
        'Maximum API requests per window (default: 100)': '每个窗口的最大 API 请求数（默认：100）',
        'Auth Rate Limiting': '认证速率限制',
        'Maximum login attempts per window (default: 5)': '每个窗口的最大登录尝试次数（默认：5）',
        
        // 邮件通知
        'Email Notifications': '邮件通知',
        'Enable Email Notifications': '启用邮件通知',
        'SMTP Host': 'SMTP 主机',
        'SMTP server hostname': 'SMTP 服务器主机名',
        'SMTP Port': 'SMTP 端口',
        'SMTP port (587 for TLS, 465 for SSL)': 'SMTP 端口（TLS 用 587，SSL 用 465）',
        'Use SSL Connection (port 465)': '使用 SSL 连接（端口 465）',
        'SMTP Username': 'SMTP 用户名',
        'SMTP authentication username': 'SMTP 认证用户名',
        'SMTP Password': 'SMTP 密码',
        'SMTP authentication password': 'SMTP 认证密码',
        'Reject Unauthorized TLS (recommended)': '拒绝未经授权的 TLS（推荐）',
        'From Email Address': '发件人邮箱地址',
        'Sender email address': '发件人邮箱地址',
        'To Email Addresses': '收件人邮箱地址',
        'Comma-separated list of recipients': '逗号分隔的收件人列表',
        'Email Subject': '邮件主题',
        'Subject line for notification emails': '通知邮件的主题行',
        
        // 监控设置
        'Monitoring Settings Panel': '监控设置面板',
        'Certificate Monitoring': '证书监控',
        'Enable Automatic Certificate Monitoring': '启用自动证书监控',
        'Check Interval (Cron Expression)': '检查间隔（Cron 表达式）',
        'Cron expression for check frequency (default: 0 8 * * * = daily at 8 AM)': '检查频率的 Cron 表达式（默认：0 8 * * * = 每天早上 8 点）',
        'Warning Threshold (days)': '警告阈值（天）',
        'Days before expiry to send warning notifications': '过期前多少天发送警告通知',
        'Critical Threshold (days)': '严重阈值（天）',
        'Days before expiry to send critical notifications': '过期前多少天发送严重通知',
        'Monitor Uploaded Certificates': '监控已上传的证书',
        
        // Cron 表达式示例
        'Cron Expression Examples:': 'Cron 表达式示例：',
        'Daily at 8:00 AM': '每天早上 8:00',
        'Every 6 hours': '每 6 小时',
        'Every Monday at 8:00 AM': '每周一早上 8:00',
        'Daily at midnight': '每天午夜',
        
        // 主题设置
        'Theme Configuration': '主题配置',
        'Default Theme Mode': '默认主题模式',
        'Light': '浅色',
        'Dark': '深色',
        'Default theme when users first visit the site': '用户首次访问网站时的默认主题',
        'Enable Dark Mode by Default': '默认启用深色模式',
        'Primary Color': '主色调',
        
        // SCEP 服务 - 完整补充
        'Simple Certificate Enrollment Protocol for mkcert': '用于 mkcert 的简单证书注册协议',
        'SCEP Service Overview': 'SCEP 服务概览',
        'SCEP (Simple Certificate Enrollment Protocol) allows devices to automatically request and receive certificates from this mkcert Web UI service. This implementation provides a simplified SCEP server that generates certificates using mkcert.': 'SCEP（简单证书注册协议）允许设备自动从此 mkcert Web UI 服务请求和接收证书。此实现提供了一个简化的 SCEP 服务器，使用 mkcert 生成证书。',
      
        'SCEP (Simple Certificate Enrollment Protocol) allows devices to automatically request and receive certificates from this mkcert Web UI service.': 'SCEP（简单证书注册协议）允许设备自动从此 mkcert Web UI 服务请求和接收证书。',
        'This implementation provides a simplified SCEP server that generates certificates using mkcert.': '此实现提供了一个简化的 SCEP 服务器，使用 mkcert 生成证书。',
        'Note:': '注意：',
        'This is a simplified SCEP implementation designed for development and testing environments. For production use, consider a full-featured SCEP server.': '这是一个为开发和测试环境设计的简化版 SCEP 实现。对于生产环境，请考虑使用功能齐全的 SCEP 服务器。',
        'This is a simplified SCEP implementation designed for development and testing environments.': '这是一个为开发和测试环境设计的简化版 SCEP 实现。',
        'For production use, consider a full-featured SCEP server.': '对于生产环境，请考虑使用功能齐全的 SCEP 服务器。',
        'SCEP Configuration': 'SCEP 配置',
        'Use these URLs to configure SCEP clients:': '使用这些 URL 配置 SCEP 客户端：',
        'SCEP Service URL:': 'SCEP 服务 URL：',
        'Get CA Certificate:': '获取 CA 证书：',
        'Get CA Capabilities:': '获取 CA 能力：',
        'Loading...': '加载中...',
        'Refresh Configuration': '刷新配置',
        
        // 企业 CA
        'Enterprise CA Status': '企业 CA 状态',
        'Checking Enterprise CA status...': '正在检查企业 CA 状态...',
        'Certificate Templates': '证书模板',
        'Loading certificate templates...': '正在加载证书模板...',
        
        // 挑战密码管理
        'Challenge Password Management': '挑战密码管理',
        'Generate challenge passwords for SCEP clients:': '为 SCEP 客户端生成挑战密码：',
        'Identifier:': '标识符：',
        'Enter unique identifier (e.g., device-001)': '输入唯一标识符（例如：device-001）',
        'Expires In:': '过期时间：',
        '1 Hour': '1 小时',
        '2 Hours': '2 小时',
        '24 Hours': '24 小时',
        '7 Days': '7 天',
        'Generate Challenge Password': '生成挑战密码',
        'Active Challenge Passwords': '活动中的挑战密码',
        'Loading challenges...': '正在加载挑战密码...',
        'Refresh Challenges': '刷新挑战密码',
        
        // 手动证书生成
        'Manual Certificate Generation': '手动证书生成',
        'Generate certificates using SCEP workflow with Enterprise CA support:': '使用支持企业 CA 的 SCEP 工作流程生成证书：',
        'Common Name (Domain):': '通用名称（域名）：',
        'Enter domain (e.g., user.example.com)': '输入域名（例如：user.example.com）',
        'Primary domain name or identity for the certificate': '证书的主要域名或身份',
        'Certificate Template:': '证书模板：',
        'User - Client Authentication': '用户 - 客户端认证',
        'M365 User - Microsoft 365 Integration': 'M365 用户 - Microsoft 365 集成',
        'Computer - Machine Authentication': '计算机 - 机器认证',
        'WiFi - Wireless Authentication': 'WiFi - 无线认证',
        'Choose template based on certificate usage': '根据证书用途选择模板',
        'User Principal Name (UPN):': '用户主体名称（UPN）：',
        'Required for M365 User certificates': 'M365 用户证书必需',
        'Subject Alternative Names (optional):': '主题备用名称（可选）：',
        'Additional domains or IPs. One per line.': '其他域名或 IP。每行一个。',
        'Challenge Password (optional):': '挑战密码（可选）：',
        'Enter challenge password or leave empty': '输入挑战密码或留空',
        'SCEP challenge password (optional if configured globally)': 'SCEP 挑战密码（如果全局配置则为可选）',
        'Generate SCEP Certificate': '生成 SCEP 证书',
        'SCEP Certificates': 'SCEP 证书',
        'Loading SCEP certificates...': '正在加载 SCEP 证书...',
        'Refresh Certificates': '刷新证书',
        
        // 集成指南
        'Enterprise Integration Guide': '企业集成指南',
        'MDM Integration': 'MDM 集成',
        'Configure your Mobile Device Management system to use this SCEP service:': '配置您的移动设备管理系统以使用此 SCEP 服务：',
        'SCEP URL:': 'SCEP URL：',
        'Challenge:': '挑战：',
        'Configure via environment variables': '通过环境变量配置',
        'Supported Templates:': '支持的模板：',
        'Key Size:': '密钥大小：',
        'Compatible with:': '兼容：',
        'Microsoft Intune, VMware Workspace ONE, Cisco Meraki, Apple Profile Manager': 'Microsoft Intune、VMware Workspace ONE、Cisco Meraki、Apple Profile Manager',
        
        'Microsoft 365 Integration': 'Microsoft 365 集成',
        'For hybrid Azure AD environments, use the M365User template:': '对于混合 Azure AD 环境，请使用 M365User 模板：',
        'Template:': '模板：',
        'UPN Format:': 'UPN 格式：',
        'user@domain.com': 'user@domain.com',
        'Subject Alternative Name:': '主题备用名称：',
        'Automatically includes UPN': '自动包含 UPN',
        'Key Usage:': '密钥用法：',
        'Digital Signature, Key Encipherment, Client Authentication': '数字签名、密钥加密、客户端认证',
        'Required Environment Variables:': '所需环境变量：',
        'API Endpoints': 'API 端点',
        
        // ========== 登录页面补充 ==========
        'Username': '用户名',
        'Password': '密码',
        'Login': '登录',
        'Secure Access Required': '需要安全访问',
        
        // ========== 证书生成表单补充 ==========
        'Domains (one per line):': '域名（每行一个）：',
        'Certificate Format:': '证书格式：',
        'PEM (.pem / -key.pem)': 'PEM (.pem / -key.pem)',
        'P12 Client': 'P12 客户端',
        
        // ========== SCEP 页面补充 ==========
        'Note:': '注意：',
        'SCEP Service URL:': 'SCEP 服务 URL：',
        'Get CA Certificate:': '获取 CA 证书：',
        'Get CA Capabilities:': '获取 CA 能力：',
        'Identifier:': '标识符：',
        'Enter unique identifier (e.g., device-001)': '输入唯一标识符（例如：device-001）',
        'Expires In:': '过期时间：',
        'Common Name (Domain):': '通用名称（域名）：',
        'Enter domain (e.g., user.example.com)': '输入域名（例如：user.example.com）',
        'Primary domain name or identity for the certificate': '证书的主要域名或身份',
        'Certificate Template:': '证书模板：',
        'User Principal Name (UPN):': '用户主体名称（UPN）：',
        'Required for M365 User certificates': 'M365 用户证书必需',
        'Subject Alternative Names (optional):': '主题备用名称（可选）：',
        'Additional domains or IPs. One per line.': '其他域名或 IP。每行一个。',
        'Challenge Password (optional):': '挑战密码（可选）：',
        'Enter challenge password or leave empty': '输入挑战密码或留空',
        'SCEP challenge password (optional if configured globally)': 'SCEP 挑战密码（如果全局配置则为可选）',
        
        // ========== Settings 页面补充 ==========
        'HTTP Port': 'HTTP 端口',
        'HTTPS Port': 'HTTPS 端口',
        'Host': '主机',
        'SSL Domain': 'SSL 域名',
        'Enable HTTPS Server': '启用 HTTPS 服务器',
        'Certificates Directory': '证书目录',
        'Uploaded Certificates Directory': '已上传证书目录',
        'Directory for uploaded certificates': '已上传证书目录',
        'Session Secret': '会话密钥',
        'OIDC Issuer URL': 'OIDC 颁发者 URL',
        'https://login.microsoftonline.com/tenant-id/v2.0': 'https://login.microsoftonline.com/租户ID/v2.0',
        'Client ID': '客户端 ID',
        'Client Secret': '客户端密钥',
        'Callback URL': '回调 URL',
        'Scopes': '作用域',
        'openid profile email': 'openid profile email',
        'CLI Rate Limiting': 'CLI 速率限制',
        'Time Window (milliseconds)': '时间窗口（毫秒）',
        'Max Requests': '最大请求数',
        'API Rate Limiting': 'API 速率限制',
        'Auth Rate Limiting': '认证速率限制',
        'SMTP Host': 'SMTP 主机',
        'SMTP server hostname': 'SMTP 服务器主机名',
        'SMTP Port': 'SMTP 端口',
        'SMTP port (587 for TLS, 465 for SSL)': 'SMTP 端口（TLS 用 587，SSL 用 465）',
        'Use SSL Connection (port 465)': '使用 SSL 连接（端口 465）',
        'SMTP Username': 'SMTP 用户名',
        'SMTP authentication username': 'SMTP 认证用户名',
        'SMTP Password': 'SMTP 密码',
        'SMTP authentication password': 'SMTP 认证密码',
        'Reject Unauthorized TLS (recommended)': '拒绝未经授权的 TLS（推荐）',
        'From Email Address': '发件人邮箱地址',
        'Sender email address': '发件人邮箱地址',
        'To Email Addresses': '收件人邮箱地址',
        'Comma-separated list of recipients': '逗号分隔的收件人列表',
        'Email Subject': '邮件主题',
        'Subject line for notification emails': '通知邮件的主题行',
        'Check Interval (Cron Expression)': '检查间隔（Cron 表达式）',
        'Warning Threshold (days)': '警告阈值（天）',
        'Days before expiry to send warning notifications': '过期前多少天发送警告通知',
        'Critical Threshold (days)': '严重阈值（天）',
        'Days before expiry to send critical notifications': '过期前多少天发送严重通知',
        'Monitor Uploaded Certificates': '监控已上传的证书',
        'Default Theme Mode': '默认主题模式',
        'Light': '浅色',
        'Dark': '深色',
        'Default theme when users first visit the site': '用户首次访问网站时的默认主题',
        'Enable Dark Mode by Default': '默认启用深色模式',
        'Primary Color': '主色调',
        
        // ========== SCEP 集成指南补充 ==========
        'MDM Integration': 'MDM 集成',
        'Configure your Mobile Device Management system to use this SCEP service:': '配置您的移动设备管理系统以使用此 SCEP 服务：',
        'SCEP URL:': 'SCEP URL：',
        'Challenge:': '挑战：',
        'Configure via environment variables': '通过环境变量配置',
        'Supported Templates:': '支持的模板：',
        'Key Size:': '密钥大小：',
        'Compatible with:': '兼容：',
        'Microsoft Intune, VMware Workspace ONE, Cisco Meraki, Apple Profile Manager': 'Microsoft Intune、VMware Workspace ONE、Cisco Meraki、Apple Profile Manager',
        'Microsoft 365 Integration': 'Microsoft 365 集成',
        'For hybrid Azure AD environments, use the M365User template:': '对于混合 Azure AD 环境，请使用 M365User 模板：',
        'Template:': '模板：',
        'UPN Format:': 'UPN 格式：',
        'user@domain.com': 'user@domain.com',
        'Subject Alternative Name:': '主题备用名称：',
        'Automatically includes UPN': '自动包含 UPN',
        'Key Usage:': '密钥用法：',
        'Digital Signature, Key Encipherment, Client Authentication': '数字签名、密钥加密、客户端认证',
        'Required Environment Variables:': '所需环境变量：',
        'API Endpoints': 'API 端点',
        
        // ========== 登录页面 OIDC 相关 ==========
        'or': '或',
        'Login with SSO': '使用单点登录',
        
        // ========== SCEP 服务 - 额外补充 ==========
        'Simple Certificate Enrollment Protocol for mkcert': '用于 mkcert 的简单证书注册协议',
        'This is a simplified SCEP implementation designed for development and testing environments.': '这是一个为开发和测试环境设计的简化版 SCEP 实现。',
        'For production use, consider a full-featured SCEP server.': '对于生产环境，请考虑使用功能齐全的 SCEP 服务器。',
        'Loading...': '加载中...',
        'Refresh Configuration': '刷新配置',
        'Checking Enterprise CA status...': '正在检查企业 CA 状态...',
        'Loading certificate templates...': '正在加载证书模板...',
        'Loading challenges...': '正在加载挑战密码...',
        'Refresh Challenges': '刷新挑战密码',
        'Loading SCEP certificates...': '正在加载 SCEP 证书...',
        'Refresh Certificates': '刷新证书',
        
        // ========== SCEP 表单选项 ==========
        'User - Client Authentication': '用户 - 客户端认证',
        'M365 User - Microsoft 365 Integration': 'M365 用户 - Microsoft 365 集成',
        'Computer - Machine Authentication': '计算机 - 机器认证',
        'WiFi - Wireless Authentication': 'WiFi - 无线认证',
        '1 Hour': '1 小时',
        '2 Hours': '2 小时',
        '24 Hours': '24 小时',
        '7 Days': '7 天',
        
        // ========== SCEP 集成指南 - 详细补充 ==========
        'Configure your Mobile Device Management system to use this SCEP service:': '配置您的移动设备管理系统以使用此 SCEP 服务：',
        'Challenge:': '挑战：',
        'Configure via environment variables': '通过环境变量配置',
        'Supported Templates:': '支持的模板：',
        'Key Size:': '密钥大小：',
        'Compatible with:': '兼容：',
        'Microsoft Intune, VMware Workspace ONE, Cisco Meraki, Apple Profile Manager': 'Microsoft Intune、VMware Workspace ONE、Cisco Meraki、Apple Profile Manager',
        'For hybrid Azure AD environments, use the M365User template:': '对于混合 Azure AD 环境，请使用 M365User 模板：',
        'Template:': '模板：',
        'UPN Format:': 'UPN 格式：',
        'Subject Alternative Name:': '主题备用名称：',
        'Automatically includes UPN': '自动包含 UPN',
        'Key Usage:': '密钥用法：',
        'Digital Signature, Key Encipherment, Client Authentication': '数字签名、密钥加密、客户端认证',
        'Required Environment Variables:': '所需环境变量：',
        
        // ========== 设置页面 - 完整补充 ==========
        'Settings configured here will override values from your .env file and persist across server restarts.': '此处设置的配置将覆盖 .env 文件中的值，并在服务器重启后保持不变。',
        
        // 服务器配置详细说明
        'Port for HTTP server (default: 3000)': 'HTTP 服务器端口（默认：3000）',
        'Port for HTTPS server (default: 3443)': 'HTTPS 服务器端口（默认：3443）',
        'Server hostname (default: localhost)': '服务器主机名（默认：localhost）',
        'Domain name for SSL certificate': 'SSL 证书的域名',
        'Force HTTPS (Redirect HTTP to HTTPS)': '强制 HTTPS（将 HTTP 重定向到 HTTPS）',
        
        // 路径配置详细说明
        'Directory for certificate storage (default: certificates)': '证书存储目录（默认：certificates）',
        'Directory for uploaded certificates': '已上传证书目录',
        
        // 基本认证详细说明
        'Username for authentication': '认证用户名',
        'Password for authentication': '认证密码',
        'Secret key for session encryption (change in production!)': '会话加密的密钥（生产环境中请修改！）',
        
        // OIDC 详细说明
        "Your OIDC provider's issuer URL": '您的 OIDC 提供商的颁发者 URL',
        'OIDC application client ID': 'OIDC 应用程序客户端 ID',
        'OIDC application client secret': 'OIDC 应用程序客户端密钥',
        'Callback URL registered in your OIDC provider': '在 OIDC 提供商中注册的回调 URL',
        'Space-separated list of scopes': '空格分隔的作用域列表',
        
        // 速率限制详细说明
        'Rate limit window in ms (default: 900000 = 15 minutes)': '速率限制窗口，单位毫秒（默认：900000 = 15 分钟）',
        'Maximum CLI operations per window (default: 10)': '每个窗口的最大 CLI 操作数（默认：10）',
        'Maximum API requests per window (default: 100)': '每个窗口的最大 API 请求数（默认：100）',
        'Maximum login attempts per window (default: 5)': '每个窗口的最大登录尝试次数（默认：5）',
        
        // 邮件通知详细说明
        'SMTP server hostname': 'SMTP 服务器主机名',
        'SMTP port (587 for TLS, 465 for SSL)': 'SMTP 端口（TLS 用 587，SSL 用 465）',
        'SMTP authentication username': 'SMTP 认证用户名',
        'SMTP authentication password': 'SMTP 认证密码',
        'Sender email address': '发件人邮箱地址',
        'Comma-separated list of recipients': '逗号分隔的收件人列表',
        'Subject line for notification emails': '通知邮件的主题行',
        
        // 监控设置详细说明
        'Enable Automatic Certificate Monitoring': '启用自动证书监控',
        'Cron expression for check frequency (default: 0 8 * * * = daily at 8 AM)': '检查频率的 Cron 表达式（默认：0 8 * * * = 每天早上 8 点）',
        'Days before expiry to send warning notifications': '过期前多少天发送警告通知',
        'Days before expiry to send critical notifications': '过期前多少天发送严重通知',
        
        // Cron 表达式示例
        'Cron Expression Examples:': 'Cron 表达式示例：',
        'Daily at 8:00 AM': '每天早上 8:00',
        'Every 6 hours': '每 6 小时',
        'Every Monday at 8:00 AM': '每周一早上 8:00',
        'Daily at midnight': '每天午夜',
        
        // 主题配置
        'Default theme when users first visit the site': '用户首次访问网站时的默认主题',
        
        // ========== 按钮和操作补充 ==========
        'Save Settings': '保存设置',
        'Reset to Defaults': '重置为默认值',
        'Export Configuration': '导出配置',
        'Import Configuration': '导入配置',
        'Reload from Server': '从服务器重新加载',
        'View Running Config': '查看运行配置',
        'Test Email': '测试邮件',
        'Verify SMTP Connection': '验证 SMTP 连接',
        'Check Expiry Now': '立即检查过期',
        'Start Monitoring': '启动监控',
        'Stop Monitoring': '停止监控',
        'Server': '服务器',
        'Authentication': '认证',
        'Rate Limiting': '速率限制',
        'Monitoring': '监控',
        
        
        // ========== 动态状态文本补充 ==========
        'OpenSSL available': 'OpenSSL 可用',
        'OpenSSL not available': 'OpenSSL 不可用',
        'Root CA exists': '根证书颁发机构已存在',
        'Auto-generated': '自动生成',
        'No SCEP certificates found.': '未找到 SCEP 证书。',
        'No active challenge passwords found.': '未找到活动的挑战密码。',
        'Email notifications are disabled': 'Email通知已禁用',
        'Set EMAIL_NOTIFICATIONS_ENABLED=true to enable email notifications': '设置 EMAIL_NOTIFICATIONS_ENABLED=true 以启用邮件通知',
        'Certificate monitoring is disabled': '证书监控已禁用',
        'Set CERT_MONITORING_ENABLED=true to enable automatic monitoring': '设置 CERT_MONITORING_ENABLED=true 以启用自动监控',
        'Standard user certificate for authentication': '认证用户证书（标准）',
        'Key Usage: digitalSignature, keyEncipherment': '使用场景：数字签名，密钥加密',
        'Extended Key Usage: clientAuth': '扩展使用场景：客户端认证',
        'Microsoft 365 user certificate with UPN support': 'Microsoft 365 用户证书，支持 UPN',
        'Extended Key Usage: clientAuth, emailProtection': '扩展使用场景：客户端认证，电子邮件保护',
        'Computer certificate for machine authentication': '计算机证书，用于机器认证',
        'Extended Key Usage: clientAuth, serverAuth': '扩展使用场景：客户端认证，服务器认证',
        'WiFi authentication certificate': 'WiFi 认证证书',
        // ========== API Endpoints ==========
        '/scep?operation=GetCACert - Retrieve CA certificate': '/scep?operation=GetCACert - 检索 CA 证书',
        '/scep?operation=PKIOperation - Process certificate requests': ' /scep?operation=PKIOperation - 处理证书请求',
        '/api/scep/certificate - Manual certificate generation': ' /api/scep/certificate - 手动生成证书',
        '/api/scep/enterprise-ca/status - Enterprise CA status': ' /api/scep/enterprise-ca/status - 企业 CA 状态',
        '/api/scep/templates - Available certificate templates': ' /api/scep/templates - 可用证书模板',
        '/api/scep/validate-upn - UPN validation for M365': ' /api/scep/validate-upn - M365 的 UPN 验证',

        // ========== 其他常见文本 ==========
        'Home': '首页',
        'Back': '返回',
        'Next': '下一步',
        'Previous': '上一步',
        'Submit': '提交',
        'Reset': '重置',
        'Clear': '清除',
        'Search': '搜索',
        'Filter': '筛选',
        'Sort': '排序',
        'Ascending': '升序',
        'Descending': '降序',
        'All': '全部',
        'None': '无',
        'Select All': '全选',
        'Deselect All': '取消全选',
        'Show': '显示',
        'Hide': '隐藏',
        'Expand': '展开',
        'Collapse': '折叠',
        'More': '更多',
        'Less': '更少',
        'Read More': '阅读更多',
        'Show Less': '收起',
        'Continue': '继续',
        'Finish': '完成',
        'Skip': '跳过',
        'Help': '帮助',
        'Support': '支持',
        'Documentation': '文档',
        'FAQ': '常见问题',
        'Contact': '联系',
        'About': '关于',
        'Version': '版本',
        'Build': '构建',
        'Last Updated': '最后更新',
        'Created': '创建时间',
        'Modified': '修改时间',
        'Author': '作者',
        'Owner': '所有者',
        'Status': '状态',
        'Type': '类型',
        'Size': '大小',
        'Location': '位置',
        'Path': '路径',
        'URL': '网址',
        'Link': '链接',
        'File': '文件',
        'Folder': '文件夹',
        'Directory': '目录',
        'Name': '名称',
        'Description': '描述',
        'Notes': '备注',
        'Comments': '评论',
        'Tags': '标签',
        'Category': '分类',
        'Priority': '优先级',
        'High': '高',
        'Medium': '中',
        'Low': '低',
        'Normal': '正常',
        'Urgent': '紧急',
        'Important': '重要',
        'Optional': '可选',
        'Required': '必填',
        'Mandatory': '强制',
        'Default': '默认',
        'Custom': '自定义',
        'Advanced': '高级',
        'Basic': '基础',
        'Simple': '简单',
        'Complex': '复杂',
        'Enabled': '已启用',
        'Disabled': '已禁用',
        'Active': '活动',
        'Inactive': '非活动',
        'Online': '在线',
        'Offline': '离线',
        'Connected': '已连接',
        'Disconnected': '已断开',
        'Available': '可用',
        'Unavailable': '不可用',
        'Ready': '就绪',
        'Busy': '忙碌',
        'Idle': '空闲',
        'Running': '运行中',
        'Stopped': '已停止',
        'Paused': '已暂停',
        'Completed': '已完成',
        'Pending': '待处理',
        'Processing': '处理中',
        'Queued': '已排队',
        'Scheduled': '已计划',
        'Cancelled': '已取消',
        'Failed': '失败',
        'Succeeded': '成功',
        'Passed': '通过',
        'Rejected': '拒绝',
        'Approved': '批准',
        'Denied': '拒绝',
        'Accepted': '接受',
        'Declined': '拒绝',
        'Confirmed': '已确认',
        'Unconfirmed': '未确认',
        'Verified': '已验证',
        'Unverified': '未验证',
        'Authenticated': '已认证',
        'Unauthenticated': '未认证',
        'Authorized': '已授权',
        'Unauthorized': '未授权',
        'Public': '公开',
        'Private': '私有',
        'Internal': '内部',
        'External': '外部',
        'Local': '本地',
        'Remote': '远程',
        'Global': '全局',
        'Regional': '区域',
        'National': '国家',
        'International': '国际'
    //
    };

    // 获取当前语言（带缓存）
    let cachedLang = null;
    function getLanguage() {
        if (cachedLang === null) {
            cachedLang = localStorage.getItem('lang') || 'en';
        }
        return cachedLang;
    }

    // 执行翻译（完整版）
    function translatePage() {
        const lang = getLanguage();
        if (lang === 'en') return;

        // 1. 批量翻译 placeholder
        const placeholderElements = document.querySelectorAll('[placeholder]');
        for (const el of placeholderElements) {
            const placeholder = el.getAttribute('placeholder');
            if (translations[placeholder]) {
                el.setAttribute('placeholder', translations[placeholder]);
            }
        }

        // 2. 遍历所有元素进行文本翻译
        const allElements = document.querySelectorAll('*');
        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            
            // 跳过脚本、样式标签
            if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') continue;
            
            // 跳过语言切换按钮内部元素（单独处理）
            if (el.closest('#i18n-lang-button')) continue;
            
            // 处理纯文本节点（只有一个文本子节点）
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
                const text = el.textContent.trim().replace(/\s+/g, ' '); // 将多个空白字符（包括换行）替换为单个空格
                if (translations[text]) {
                    el.textContent = translations[text];
                }
                continue;
            }
            
            // 处理包含 HTML 的元素（如按钮中的图标+文本）
            // 重要：只翻译文本节点，不替换整个内容
            if (el.children.length > 0 && el.childNodes.length > 0) {
                let hasTextNodes = false;
                const childNodes = Array.from(el.childNodes);
                
                for (const node of childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        const originalText = node.textContent;
                        const trimmedText = originalText.trim().replace(/\s+/g, ' '); // 规范化空白字符
                        
                        if (trimmedText && translations[trimmedText]) {
                            // 策略1: 如果原文本与规范化后完全一致（除了首尾空格），直接替换
                            if (originalText.trim() === trimmedText) {
                                node.textContent = translations[trimmedText];
                            } else {
                                // 策略2: 保留原始的缩进和换行格式，只替换文本内容
                                // 提取前导空白和后继空白
                                const leadingWhitespace = originalText.match(/^\s*/)[0];
                                const trailingWhitespace = originalText.match(/\s*$/)[0];
                                node.textContent = leadingWhitespace + translations[trimmedText] + trailingWhitespace;
                            }
                            hasTextNodes = true;
                        }
                    }
                }
                
                // 如果没有找到可翻译的文本节点，尝试整体翻译（仅当元素没有复杂子结构时）
                if (!hasTextNodes && el.children.length <= 1) {
                    const text = el.textContent.trim().replace(/\s+/g, ' '); // 规范化空白字符
                    if (text && translations[text]) {
                        el.textContent = translations[text];
                    }
                }
                continue;
            }
            
            // 特殊处理常见块级和内联元素
            const commonTags = ['P', 'SMALL', 'STRONG', 'SPAN', 'LABEL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'TD', 'TH', 'DIV', 'A', 'BUTTON'];
            if (commonTags.includes(el.tagName)) {
                const text = el.textContent.trim().replace(/\s+/g, ' '); // 规范化空白字符，将换行符和多余空格合并为单个空格
                if (text && translations[text]) {
                    el.textContent = translations[text];
                }
            }
        }

        // 3. 特殊处理语言切换按钮 - 直接更新内层 span 的文本
        const langButton = document.getElementById('i18n-lang-button');
        if (langButton) {
            const innerTextSpan = langButton.querySelector('span > span:last-child');
            if (innerTextSpan) {
                innerTextSpan.textContent = lang === 'zh-CN' ? '中文' : 'English';
            }
        }
        
        console.log('[i18n] 页面已翻译为: ' + lang);
    }

    // 切换语言（优化版）
    window.toggleLang = function() {
        const currentLang = getLanguage();
        const newLang = currentLang === 'en' ? 'zh-CN' : 'en';
        localStorage.setItem('lang', newLang);
        cachedLang = newLang; // 更新缓存
        location.reload();
    };

    // 自动插入语言切换按钮（优化版）
    function insertLanguageToggle() {
        // 检查是否已经存在语言切换按钮，避免重复插入
        if (document.getElementById('i18n-lang-button')) {
            return;
        }
        
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return; // 如果没有主题按钮，直接返回
        
        // 创建语言切换按钮
        const langBtn = document.createElement('button');
        langBtn.className = 'theme-toggle';
        langBtn.id = 'i18n-lang-button';
        langBtn.style.cssText = 'display:flex;gap:10px;position:relative;top:auto;right:auto;z-index:1000';
        const currentLang = getLanguage();
        
        // 使用 span 包裹内容，确保横向排列（精简样式）
        langBtn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:0.5rem;white-space:nowrap"><i class="fas fa-language"></i><span>${currentLang === 'zh-CN' ? '中文' : 'English'}</span></span>`;
        langBtn.onclick = toggleLang;
        
        // 覆盖主题按钮的定位样式，清除所有边距
        themeToggle.style.cssText = 'position:relative;top:auto;right:auto;padding:0.5rem 1rem';

        // 创建独立的按钮组容器
        const buttonGroup = document.createElement('div');
        buttonGroup.style.cssText = 'display:flex;justify-content:flex-end;gap:10px;top:auto;right:0;z-index:1000';
        
        // 一次性完成 DOM 操作（减少重排）
        themeToggle.parentNode.insertBefore(buttonGroup, themeToggle);
        buttonGroup.appendChild(themeToggle);
        buttonGroup.appendChild(langBtn);
    }

    // 页面加载完成后自动插入按钮并翻译页面
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            insertLanguageToggle();
            translatePage();
            setupDynamicTranslationObserver();
        });
    } else {
        insertLanguageToggle();
        translatePage();
        setupDynamicTranslationObserver();
    }

    // 设置动态内容翻译监听器（MutationObserver）
    function setupDynamicTranslationObserver() {
        const lang = getLanguage();
        if (lang === 'en') return; // 英文不需要翻译

        // 创建 MutationObserver 监听 DOM 变化
        const observer = new MutationObserver((mutations) => {
            let needsRetranslation = false;
            
            mutations.forEach((mutation) => {
                // 检查是否有新增节点
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        // 只处理元素节点
                        if (node.nodeType !== Node.ELEMENT_NODE) return;
                        
                        // 跳过脚本和样式标签
                        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
                        
                        // 跳过语言切换按钮内部元素
                        if (node.closest && node.closest('#i18n-lang-button')) return;
                        
                        // 翻译新插入的元素及其子元素
                        translateElement(node);
                    });
                    needsRetranslation = true;
                }
                
                // 检查是否有文本内容变化（innerHTML 更新会触发这个）
                if (mutation.type === 'characterData' || mutation.type === 'childList') {
                    needsRetranslation = true;
                }
            });
            
            // 如果有变化，延迟 100ms 后重新翻译整个页面（防抖）
            if (needsRetranslation) {
                clearTimeout(window._i18nDebounceTimer);
                window._i18nDebounceTimer = setTimeout(() => {
                    translatePage();
                }, 100);
            }
        });

        // 开始监听整个文档的变化
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            characterDataOldValue: false
        });

        console.log('[i18n] 动态内容翻译监听器已启动');
        
        // 暴露全局刷新函数供业务代码调用
        window.refreshTranslation = function() {
            console.log('[i18n] 手动触发页面翻译刷新');
            translatePage();
        };
    }

    // 翻译单个元素（供 MutationObserver 调用）
    function translateElement(el) {
        const lang = getLanguage();
        if (lang === 'en') return;

        // 处理纯文本节点
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = el.textContent.trim();
            if (translations[text]) {
                el.textContent = translations[text];
            }
            return;
        }

        // 处理包含 HTML 的元素
        if (el.children.length > 0 && el.childNodes.length > 0) {
            const childNodes = Array.from(el.childNodes);
            
            for (const node of childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const trimmedText = node.textContent.trim();
                    if (trimmedText && translations[trimmedText]) {
                        node.textContent = node.textContent.replace(trimmedText, translations[trimmedText]);
                    }
                }
            }
            return;
        }

        // 处理常见块级和内联元素
        const commonTags = ['P', 'SMALL', 'STRONG', 'SPAN', 'LABEL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'TD', 'TH', 'DIV', 'A', 'BUTTON'];
        if (commonTags.includes(el.tagName)) {
            const text = el.textContent.trim();
            if (text && translations[text]) {
                el.textContent = translations[text];
            }
        }
    }
})();
