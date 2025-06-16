'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* CyberAware */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">CyberAware</h3>
										<p className="text-gray-400">
											A cybersecurity awareness platform to educate users on phishing, malware, and social engineering, reducing human-related vulnerabilities. Features learning modules, simulations, and quizzes for students, educators, and organizations.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js with App Router</li>
												<li>• Tailwind CSS Styling</li>
												<li>• Interactive Quizzes</li>
												<li>• Responsive Design</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Node.js API</li>
												<li>• PostgreSQL Database</li>
												<li>• Supabase Integration</li>
												<li>• User Progress Tracking</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Developed under SQI College of ICT</li>
											<li>• Supports diverse user groups globally</li>
											<li>• Planned certification system</li>
										</ul>
									</div>

									<div className="flex space-x-4">
										<a
											href="https://github.com/just-jinad/Cyber-Awareness-app"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
										>
											<FaGithub className="mr-2" /> GitHub
										</a>
										<a
											href="https://cyber-awareness-app.vercel.app"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
										>
											<FaGlobe className="mr-2" /> Live Demo
										</a>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Next.js Frontend (Client Components)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Node.js API (Supabase)
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-400 text-[12px]">
													PostgreSQL Database
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="140" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Davejosh Global Resources LTD */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Davejosh Global Resources LTD</h3>
										<p className="text-gray-400">
											An e-commerce platform for laboratory products and chemicals, serving professionals and institutions with a responsive design and planned cart and payment systems.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js Dynamic Routes</li>
												<li>• Tailwind CSS Styling</li>
												<li>• Product Card Navigation</li>
												<li>• Framer-motion Animations</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• MongoDB Database</li>
												<li>• Node.js API</li>
												<li>• Stripe Integration (Planned)</li>
												<li>• Unsplash Image Handling</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Replicated provided design layout</li>
											<li>• Fully responsive homepage</li>
											<li>• Scalable for global markets</li>
										</ul>
									</div>

									<div className="flex space-x-4">
										<a
											href="https://github.com/just-jinad/Davejosh-global-resources-LTD"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
										>
											<FaGithub className="mr-2" /> GitHub
										</a>
										<a
											href="https://davejosh-global-resources-ltd.vercel.app"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
										>
											<FaGlobe className="mr-2" /> Live Demo
										</a>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Next.js Frontend (SSR + Client)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Node.js API
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MongoDB Database
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="140" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Nambu Shalom Rural Ministry */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Nambu Shalom Rural Ministry</h3>
										<p className="text-gray-400">
											A dynamic platform for a faith-based organization, supporting rural communities through sports, education, and outreach, with a donation system and secure admin access.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js with SSR/SSG</li>
												<li>• Tailwind CSS Styling</li>
												<li>• Donation Form</li>
												<li>• Responsive Gallery</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• MongoDB Database</li>
												<li>• Next-auth with RBAC</li>
												<li>• TypeScript Support</li>
												<li>• Vercel Deployment</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Supports 500+ families</li>
											<li>• SEO-optimized for global reach</li>
											<li>• Secure admin dashboard</li>
										</ul>
									</div>

									<div className="flex space-x-4">
										<span className="flex items-center text-gray-400">
											<FaGithub className="mr-2" /> Private GitHub (Available on Request)
										</span>
										<a
											href="https://nsrm.vercel.app"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
										>
											<FaGlobe className="mr-2" /> Live Demo
										</a>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Next.js Frontend (SSR + SSG)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Next.js API with next-auth
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MongoDB Database
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="140" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}