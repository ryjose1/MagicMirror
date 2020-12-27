/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	// Keys for reference
	// module	The name of the module. This can also contain the subfolder. Valid examples include clock, default/calendar and custommodules/mymodule.
	// position	The location of the module in which the module will be loaded. Possible values are top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below. This field is optional but most modules require this field to set. Check the documentation of the module for more information. Multiple modules with the same position will be ordered based on the order in the configuration file.
	// classes	A list of additional CSS classes which will be set on the module. This field is optional.
	// header	To display a header text above the module, add the header property. This field is optional.
	// disabled	Set disabled to true to skip creating the module. This field is optional.
	// config	An object with the module configuration properties. Check the documentation of the module for more information. This field is optional, unless the module requires extra configuration.

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "custommodules/MMM-CalendarExt2",
			config: {
				views: [
					{
						mode: "month",
						position: "bottom_bar",
						slotMaxHeight: "130px",
						weeksFormat: "wo"
					}
                ],
                scenes: [
					{
						name: "DEFAULT"
					}
				],
				calendars: [
					{
						name: "events",
						url: "https://calendar.google.com/calendar/ical/ryanalex.jose%40gmail.com/private-841dbfc82ffd351f99e77c337c486980/basic.ics"
					},
					{
						name: "Birthdays",
						url: "https://calendar.google.com/calendar/ical/odh22k0c18tdu4u1c0od643chc%40group.calendar.google.com/private-ec0bc1a92797386f1ff8534603109dea/basic.ics"
					}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
