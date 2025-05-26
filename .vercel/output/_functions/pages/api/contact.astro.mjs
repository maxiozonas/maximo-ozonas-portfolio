import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
var define_process_env_default = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\max\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "133861265120348297", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "MAXIMO", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EMAIL_APP_PASSWORD: "tviz wisu hhvl jqux", EMAIL_USER: "maxiozonas10@gmail.com", HOME: "C:\\Users\\max", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\max", INIT_CWD: "C:\\Users\\max\\proyectos\\maximo-ozonas-portfolio", JAVA_HOME: "C:\\Program Files\\Java\\jdk-21", LOCALAPPDATA: "C:\\Users\\max\\AppData\\Local", LOGONSERVER: "\\\\MAXIMO", MAVEN_HOME: "C:\\Users\\max\\apache-maven-3.9.9", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_PATH: "C:\\Users\\max\\Proyectos\\maximo-ozonas-portfolio\\node_modules\\.pnpm\\astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f\\node_modules\\astro\\node_modules;C:\\Users\\max\\Proyectos\\maximo-ozonas-portfolio\\node_modules\\.pnpm\\astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f\\node_modules;C:\\Users\\max\\Proyectos\\maximo-ozonas-portfolio\\node_modules\\.pnpm\\node_modules", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "C:\\Users\\max\\AppData\\Roaming\\npm\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmjs.org/", npm_config_user_agent: "pnpm/10.7.1 npm/? node/v22.14.0 win32 x64", npm_config_verify_deps_before_run: "false", npm_execpath: "C:\\Users\\max\\AppData\\Roaming\\npm\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "astro build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_name: "maximo-ozonas-portfolio", npm_package_version: "0.0.1", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\max\\OneDrive", OS: "Windows_NT", Path: "C:\\Users\\max\\proyectos\\maximo-ozonas-portfolio\\node_modules\\.bin;C:\\Users\\max\\AppData\\Roaming\\npm\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Python313\\Scripts\\;C:\\Python313\\;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Java\\jdk-21\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\max\\apache-maven-3.9.9\\bin;C:\\Program Files\\Cloudflare\\Cloudflare WARP\\;C:\\Users\\max\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\max\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\max\\AppData\\Roaming\\npm;C:\\Users\\max\\AppData\\Local\\Programs\\Windsurf\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL", PNPM_SCRIPT_SRC_DIR: "C:\\Users\\max\\proyectos\\maximo-ozonas-portfolio", POWERSHELL_TELEMETRY_OPTOUT: "1", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\max\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SSH_SOCKET_DIR: "~/.ssh", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\max\\AppData\\Local\\Temp", TERM_PROGRAM: "WarpTerminal", TMP: "C:\\Users\\max\\AppData\\Local\\Temp", USERDOMAIN: "maximo", USERDOMAIN_ROAMINGPROFILE: "maximo", USERNAME: "max", USERPROFILE: "C:\\Users\\max", WARP_HONOR_PS1: "0", WARP_IS_LOCAL_SHELL_SESSION: "1", WARP_SHELL_DEBUG_MODE: "0", WARP_USE_SSH_WRAPPER: "1", windir: "C:\\WINDOWS" };
const prerender = false;
async function POST({ request }) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide all required fields"
        }),
        { status: 400 }
      );
    }
    const emailUser = "maxiozonas10@gmail.com";
    const emailPass = "tviz wisu hhvl jqux";
    console.log("Environment variables check:", {
      hasEmailUser: !!emailUser,
      emailUserLength: emailUser ? emailUser.length : 0,
      hasEmailPass: !!emailPass,
      emailPassLength: emailPass ? emailPass.length : 0,
      allEnvKeys: Object.keys(Object.assign(__vite_import_meta_env__, { EMAIL_USER: "maxiozonas10@gmail.com", EMAIL_APP_PASSWORD: "tviz wisu hhvl jqux", NODE: define_process_env_default.NODE, NODE_ENV: define_process_env_default.NODE_ENV, OS: define_process_env_default.OS })).filter((key) => !key.includes("VITE_"))
    });
    if (!emailUser || !emailPass) ;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      // usar SSL
      auth: {
        user: emailUser,
        pass: emailPass
      },
      debug: true
      // mostrar información de depuración
    });
    await transporter.verify().catch((error) => {
      console.error("SMTP verification failed:", error);
      throw new Error(`SMTP verification failed: ${error.message}`);
    });
    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: "maxiozonas10@gmail.com",
      subject: `New Contact from Portfolio: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact from Your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
        stack: void 0
      }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
