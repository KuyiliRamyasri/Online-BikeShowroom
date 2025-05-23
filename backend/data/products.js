const products = [
  {
    name: '2023 BMW S1000 RR',
    image: '/images/airpods.jpg',
    description:
      'Key Specs & Features of S 1000 RR Key Specs & Features of S 1000 RR:- The BMW S 1000 RR is the German bikemaker’s flagship (road-legal) supersport meant to tame the tracks. The 2023 iteration gets slightly updated styling and sharper bodywork. It also gets a twin-LED headlamp setup while the tail lamp has been integrated into the rear turn indicators. Additionally, it features M 1000 RR inspired winglets. Aside from this, the bike comes equipped with a Bluetooth-enabled 6.5-inch colour TFT instrument console, a new twin-spar aluminium frame, subframe, and a WSBK-inspired swingarm. The new bike also gets a new Slide Control Function and Brake Slide Assist. The 999cc inline-four motor makes 209.3PS, which is 2.72PS more than the previous model. The peak torque of 113Nm remains the same. Underpinnings include a 45mm USD fork and monoshock suspension setup along with two 320mm discs up front and a 220 disc at the rear for braking. ',
    brand: 'BMW',
    category: 'Premium Bike',
    price: 8500,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  {
    name: 'Honda CB300F',
    image: '/images/phone.jpg',
    description:
      'The CB300F gets full LED lighting along with a fully-digital LCD instrument cluster. It shows useful information like realtime/average mileage, distance-to-empty readouts, battery voltage, and gear position indicator. You also get the Honda Smartphone Voice Control System (HSVCS), through which you can pair your smartphone and attend phone calls, or seek voice navigation with the help of the switch cube on the left handle along with voice prompts. Honda CB300F Engine. At the heart of the bike is the same 293cc, single-cylinder, air-oil-cooled motor making 24.5PS at 7500rpm and 25.6Nm at 5500rpm, but it is now BS6.2 and OBD-2 compliant. It mated to a six-speed transmission and you also get traction control. Honda CB300F Suspension & Brakes. It gets 17-inch alloy wheels. Suspension duties are handled by an inverted fork and with 5-step preload-adjustable monoshock absorber. You get a 276mm disc up front and a 220mm one at the rear, with the safety net of dual-channel ABS.',
    brand: 'Honda',
    category: 'Bike',
    price: 4599.99,
    countInStock: 7,
    rating: 4.2,
    numReviews: 8,
  },
  {
    name: 'Kawasaki Ninja H2R ',
    image: '/images/camera.jpg',
    description:
      'Kawasaki Ninja H2R is a super bike available in only 1 variant and 1 colour. The Kawasaki Ninja H2R is powered by 998cc BS6 engine which develops a power of 305.75 bhp and a torque of 165 Nm. With both front and rear disc brakes, Kawasaki Ninja H2R comes up with anti-locking braking system. This Ninja H2R bike weighs 216 kg and has a fuel tank capacity of 17 liters. The motorcycle continues to use the supercharged, 998cc, inline-four, liquid-cooled engine that requires a minimum octane rating of RON95. Linked to a six-speed gearbox, the motor produces 305.7bhp (321.8bhp with RAM Air) of maximum power at 14,000rpm and 165Nm of peak torque at 12,500rpm. The transmission benefits from a slipper/assist clutch and a bidirectional quickshifter.',
    brand: 'Kawasaki',
    category: 'Bike',
    price: 9929.99,
    countInStock: 5,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name: 'Triumph Tiger 900',
    image: '/images/playstation.jpg',
    description:
      'Triumph Tiger 900 is a adventure bike available in 2 variants and 6 colours. The Triumph Tiger 900 is powered by 888cc BS6 engine which develops a power of 106.5 bhp and a torque of 90 Nm. With both front and rear disc brakes, Triumph Tiger 900 comes up with anti-locking braking system. The Tiger 900 is an adventure bike that replaces the Tiger 800. This Triumph now sports new styling, new engine and better electronics making it one of the best adventure bikes in the segment. But like the other big ADVs, this is too is a bit expensive to maintain.',
    brand: 'Triumph',
    category: 'Premium Bike',
    price: 10399.99,
    countInStock: 1,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Ducati Panigale V4 R',
    image: '/images/mouse.jpg',
    description:
      'Ducati Panigale V4 R is a super bike available in only 1 variant and 1 colour. The Ducati Panigale V4 R is powered by 998cc BS6 engine which develops a power of 215 bhp and a torque of 111.3 Nm. With both front and rear disc brakes, Ducati Panigale V4 R comes up with anti-locking braking system. This Panigale V4 R bike weighs 193.5 kg and has a fuel tank capacity of 17 liters. The Panigale V4R is a race bike that has been developed and marketed as a road bike. There are only a handful motorcycles on this planet that have been made for top-class racing and also sold to the consumers – the Ducati Panigale V4R is one of them. The Panigale V4R with its racing intent is also one of the most powerful road bikes on this planet. It is loaded with performance and technologies that makes it an extremely focused motorcycle. The 998cc V4 engine makes a whopping 221bhp at 15,250rpm and maximum torque of 112Nm at 11,500rpm. This motor is mated to a six-speed race gearbox with Ducati quickshift.',
    brand: 'Ducati',
    category: 'Premium Bike',
    price: 15000,
    countInStock: 2,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Harley-Davidson Heritage Classic',
    image: '/images/alexa.jpg',
    description:
      'Harley-Davidson Heritage Classic is a cruiser bike available in only 1 variant and 4 colours. The Harley-Davidson Heritage Classic is powered by 1868cc BS6 engine which develops a power of 93.87 bhp and a torque of 155 Nm. With both front and rear disc brakes, Harley-Davidson Heritage Classic comes up with anti-locking braking system. This Heritage Classic bike weighs 330 kg and has a fuel tank capacity of 18.9 liters. The 2023 Harley-Davidson Heritage Classic is updated with new colour schemes. There is Vivid Black, Prospect Gold, Bright Billiard Blue, and Heirloom Red Fade. From the entire palette offered for the Heritage Classic, the Heirloom Red Fade is not only the most expensive but also seems to be the most desirable option. Harley-Davidson has powered the 2023 Heritage Classic with a 1,868cc V-twin engine that makes 94bhp and 155Nm. It’s mated to a six-speed gearbox. Harley claims that this bike can return 5.5 litres/100km (18.18kmpl) of fuel economy. The bike rides on 49mm telescopic front forks and monoshock with hydraulic preload adjustability.',
    brand: 'Harley',
    category: 'Bike',
    price: 12000,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Aprilia RSV4 1100 Factory',
    image: '/images/aprilia.jpg',
    description:
      'Aprilia RSV4 1100 Factory is a super bike available in only 1 variant and 2 colours. The Aprilia RSV4 1100 Factory is powered by 1099cc BS6 engine which develops a power of 213.89 bhp and a torque of 125 Nm. With both front and rear disc brakes, Aprilia RSV4 1100 Factory comes up with anti-locking braking system. This RSV4 1100 Factory bike weighs 202 kg and has a fuel tank capacity of 17.9 liters. Aprilia India has updated its portfolio with the launch of the BS6-compliant RSV4. The company is currently offering a single variant of its flagship supersport motorcycle in the Indian market, the RSV4 Factory. The BS6-compliant 1,099cc, V4-cylinder, liquid-cooled motor produces 210.7bhp of power at 13,000rpm and 125Nm of peak torque at 10,500rpm. The power is tamed through the APRC system (Aprilia Performance Ride Control) electronics package that comprises engine maps (AEM), engine brake control (AEB), traction control (ATC), wheelie control (AWC), launch control (ALC), cruise control (ACC), speed limiter (APT), and six riding modes (three Road, three Track). The electronic rider aids also include a three-level Bosch 9.1 MP ABS with cornering function and RLM (Rear wheel Lift-up Mitigation). The premium hardware on the RSV4 Factory include 43mm, Ohlins NIX front forks and a Ohlins TTX monoshock – both electronically managed – to handle the suspension tasks. The braking setup comprises twin 330mm discs with Brembo Stylema monobloc radial callipers at the front and a single 220mm rotor with Brembo calliper at the back.',
    brand: 'Aprilia',
    category: 'Bike',
    price: 6000,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
];

export default products;
