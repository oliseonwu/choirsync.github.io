// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", (request) => {
  return "Hello world!";
});

// Function to check if email exists in waitlist
async function checkEmailExists(email) {
  const Waitlist = Parse.Object.extend("Waitlist");
  const query = new Parse.Query(Waitlist);
  query.equalTo("email", email);
  const count = await query.countDocuments({ useMasterKey: true });
  return count > 0;
}

// Cloud function to handle waitlist submissions
Parse.Cloud.define("submitWaitlistRequest", async (request) => {
  try {
    // Get parameters from the request
    const { fullName, email, choirName } = request.params;

    // Validate required fields
    if (!fullName || !email) {
      throw new Error("Full name and email are required");
    }

    // Check if email already exists
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      return {
        success: false,
        message: "You're already on the waitlist!",
        alreadyExists: true,
      };
    }

    // Create a new Waitlist object
    const WaitlistEntry = new Parse.Object("Waitlist");

    // Set the values
    WaitlistEntry.set("name", fullName);
    WaitlistEntry.set("email", email);
    WaitlistEntry.set("choir_name", choirName || "");

    await WaitlistEntry.save();

    return {
      success: true,
      message: "Successfully Joined Waitlist!",
    };
  } catch (error) {
    console.error("Error in submitWaitlistRequest:", error);
    throw new Error(`Failed to add to waitlist: ${error.message}`);
  }
});
