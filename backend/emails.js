import {mailtrapClient,sender} from "./mailtrap.config.js"
import {VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE} from './emailTemplates.js'

export const sendVerificationMail = async (email, verificationToken) => {
    const recipient = [{email}]
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email verification"
        })
        console.log("Email sent successfully", response);
    }
    catch(err){
        console.error(err);
        throw new Error(`Error sending verification email: ${err}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendResetPasswordEmail = async (email, resetURL) => {
	const recipient = [{email}];

	try {
		const response = mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset Password Request.",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
			category: "Password reset"
		});
		console.log("Password reset link sent successfully", response)
	} 
	catch (error) {
		console.error(err);
        throw new Error(`Error sending pass reset req link: ${err}`)
	}
}

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{email}];

	try {
		const response = mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password reset successful.",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password reset"
		});
		console.log("Password reset successful.", response);
	} 
	catch (error) {
		console.error(err);
        throw new Error(`Password reset unsuccessful. ${err}`)
	}
}