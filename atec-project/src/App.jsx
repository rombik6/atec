import { useState } from 'react'
import { Plus, Edit2, Trash2, Clock, MapPin } from 'lucide-react'

export default function CollegeSchedule() {
	const [scheduleData, setScheduleData] = useState({
		Понедельник: [
			{
				time: '09:00-10:30',
				subject: 'Математика',
				teacher: 'Иванов И.И.',
				room: '301',
			},
			{
				time: '10:45-12:15',
				subject: 'Физика',
				teacher: 'Петрова А.С.',
				room: '205',
			},
			{
				time: '13:00-14:30',
				subject: 'Программирование',
				teacher: 'Сидоров П.К.',
				room: '401',
			},
		],
		Вторник: [
			{
				time: '09:00-10:30',
				subject: 'Английский язык',
				teacher: 'Смирнова О.В.',
				room: '102',
			},
			{
				time: '10:45-12:15',
				subject: 'История',
				teacher: 'Козлов Д.А.',
				room: '203',
			},
		],
		Среда: [
			{
				time: '09:00-10:30',
				subject: 'Химия',
				teacher: 'Новикова Е.М.',
				room: '304',
			},
			{
				time: '10:45-12:15',
				subject: 'Литература',
				teacher: 'Волкова Т.Н.',
				room: '201',
			},
			{
				time: '13:00-14:30',
				subject: 'Физкультура',
				teacher: 'Михайлов С.Р.',
				room: 'Спортзал',
			},
		],
		Четверг: [
			{
				time: '09:00-10:30',
				subject: 'Базы данных',
				teacher: 'Сидоров П.К.',
				room: '401',
			},
			{
				time: '10:45-12:15',
				subject: 'Математика',
				teacher: 'Иванов И.И.',
				room: '301',
			},
		],
		Пятница: [
			{
				time: '09:00-10:30',
				subject: 'Веб-разработка',
				teacher: 'Сидоров П.К.',
				room: '402',
			},
			{
				time: '10:45-12:15',
				subject: 'Экономика',
				teacher: 'Орлова Н.П.',
				room: '105',
			},
			{
				time: '13:00-14:30',
				subject: 'Английский язык',
				teacher: 'Смирнова О.В.',
				room: '102',
			},
		],
	})

	const [selectedDay, setSelectedDay] = useState('Понедельник')
	const [isEditing, setIsEditing] = useState(false)
	const [editingIndex, setEditingIndex] = useState(null)
	const [newLesson, setNewLesson] = useState({
		time: '',
		subject: '',
		teacher: '',
		room: '',
	})

	const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']

	const handleAddLesson = () => {
		if (newLesson.time && newLesson.subject) {
			setScheduleData({
				...scheduleData,
				[selectedDay]: [...scheduleData[selectedDay], newLesson],
			})
			setNewLesson({ time: '', subject: '', teacher: '', room: '' })
			setIsEditing(false)
		}
	}

	const handleEditLesson = index => {
		setNewLesson(scheduleData[selectedDay][index])
		setEditingIndex(index)
		setIsEditing(true)
	}

	const handleUpdateLesson = () => {
		const updated = [...scheduleData[selectedDay]]
		updated[editingIndex] = newLesson
		setScheduleData({ ...scheduleData, [selectedDay]: updated })
		setNewLesson({ time: '', subject: '', teacher: '', room: '' })
		setIsEditing(false)
		setEditingIndex(null)
	}

	const handleDeleteLesson = index => {
		const updated = scheduleData[selectedDay].filter((_, i) => i !== index)
		setScheduleData({ ...scheduleData, [selectedDay]: updated })
	}

	const handleCancelEdit = () => {
		setNewLesson({ time: '', subject: '', teacher: '', room: '' })
		setIsEditing(false)
		setEditingIndex(null)
	}

	const styles = {
		container: {
			minHeight: '100vh',
			background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			padding: '20px',
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
		},
		wrapper: {
			maxWidth: '1200px',
			margin: '0 auto',
		},
		header: {
			textAlign: 'center',
			marginBottom: '40px',
			paddingTop: '30px',
		},
		title: {
			fontSize: '42px',
			fontWeight: 'bold',
			color: 'white',
			marginBottom: '10px',
			textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
		},
		subtitle: {
			fontSize: '18px',
			color: 'rgba(255,255,255,0.9)',
		},
		daysContainer: {
			display: 'flex',
			gap: '10px',
			marginBottom: '30px',
			overflowX: 'auto',
			paddingBottom: '10px',
		},
		dayButton: {
			padding: '12px 24px',
			borderRadius: '12px',
			fontWeight: '600',
			border: 'none',
			cursor: 'pointer',
			whiteSpace: 'nowrap',
			transition: 'all 0.3s ease',
			fontSize: '16px',
		},
		dayButtonActive: {
			backgroundColor: 'white',
			color: '#667eea',
			boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
			transform: 'scale(1.05)',
		},
		dayButtonInactive: {
			backgroundColor: 'rgba(255,255,255,0.2)',
			color: 'white',
		},
		formCard: {
			backgroundColor: 'white',
			borderRadius: '16px',
			boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
			padding: '30px',
			marginBottom: '30px',
		},
		formTitle: {
			fontSize: '24px',
			fontWeight: '600',
			color: '#667eea',
			marginBottom: '20px',
		},
		formGrid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
			gap: '15px',
			marginBottom: '20px',
		},
		input: {
			padding: '12px 16px',
			border: '2px solid #e0e7ff',
			borderRadius: '10px',
			fontSize: '16px',
			outline: 'none',
			transition: 'border-color 0.3s ease',
		},
		buttonContainer: {
			display: 'flex',
			gap: '15px',
		},
		button: {
			padding: '12px 24px',
			borderRadius: '10px',
			border: 'none',
			cursor: 'pointer',
			fontSize: '16px',
			fontWeight: '600',
			transition: 'all 0.3s ease',
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
		},
		buttonPrimary: {
			backgroundColor: '#667eea',
			color: 'white',
			boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
		},
		buttonSecondary: {
			backgroundColor: '#e0e7ff',
			color: '#667eea',
		},
		buttonDanger: {
			backgroundColor: '#ef4444',
			color: 'white',
		},
		addButton: {
			marginBottom: '30px',
		},
		lessonsContainer: {
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
		},
		lessonCard: {
			backgroundColor: 'white',
			borderRadius: '16px',
			boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
			padding: '24px',
			transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		},
		lessonContent: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
		lessonInfo: {
			flex: 1,
		},
		lessonTime: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			color: '#667eea',
			marginBottom: '10px',
			fontSize: '16px',
			fontWeight: '600',
		},
		lessonSubject: {
			fontSize: '28px',
			fontWeight: 'bold',
			color: '#1e293b',
			marginBottom: '10px',
		},
		lessonTeacher: {
			color: '#64748b',
			marginBottom: '8px',
			fontSize: '16px',
		},
		lessonRoom: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			color: '#94a3b8',
			fontSize: '15px',
		},
		lessonActions: {
			display: 'flex',
			gap: '10px',
		},
		iconButton: {
			padding: '10px',
			borderRadius: '10px',
			border: 'none',
			cursor: 'pointer',
			transition: 'background-color 0.3s ease',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		editButton: {
			backgroundColor: '#e0e7ff',
			color: '#667eea',
		},
		deleteButton: {
			backgroundColor: '#fee2e2',
			color: '#ef4444',
		},
		emptyState: {
			backgroundColor: 'white',
			borderRadius: '16px',
			boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
			padding: '60px',
			textAlign: 'center',
		},
		emptyText: {
			color: '#cbd5e1',
			fontSize: '20px',
		},
	}

	return (
		<div style={styles.container}>
			<div style={styles.wrapper}>
				<header style={styles.header}>
					<h1 style={styles.title}>📚 Расписание занятий</h1>
					<p style={styles.subtitle}>Колледж информационных технологий</p>
				</header>

				<div style={styles.daysContainer}>
					{days.map(day => (
						<button
							key={day}
							onClick={() => setSelectedDay(day)}
							style={{
								...styles.dayButton,
								...(selectedDay === day
									? styles.dayButtonActive
									: styles.dayButtonInactive),
							}}
							onMouseEnter={e => {
								if (selectedDay !== day) {
									e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'
								}
							}}
							onMouseLeave={e => {
								if (selectedDay !== day) {
									e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'
								}
							}}
						>
							{day}
						</button>
					))}
				</div>

				{isEditing && (
					<div style={styles.formCard}>
						<h3 style={styles.formTitle}>
							{editingIndex !== null
								? '✏️ Редактировать занятие'
								: '➕ Добавить занятие'}
						</h3>
						<div style={styles.formGrid}>
							<input
								type='text'
								placeholder='Время (09:00-10:30)'
								value={newLesson.time}
								onChange={e =>
									setNewLesson({ ...newLesson, time: e.target.value })
								}
								style={styles.input}
								onFocus={e => (e.target.style.borderColor = '#667eea')}
								onBlur={e => (e.target.style.borderColor = '#e0e7ff')}
							/>
							<input
								type='text'
								placeholder='Предмет'
								value={newLesson.subject}
								onChange={e =>
									setNewLesson({ ...newLesson, subject: e.target.value })
								}
								style={styles.input}
								onFocus={e => (e.target.style.borderColor = '#667eea')}
								onBlur={e => (e.target.style.borderColor = '#e0e7ff')}
							/>
							<input
								type='text'
								placeholder='Преподаватель'
								value={newLesson.teacher}
								onChange={e =>
									setNewLesson({ ...newLesson, teacher: e.target.value })
								}
								style={styles.input}
								onFocus={e => (e.target.style.borderColor = '#667eea')}
								onBlur={e => (e.target.style.borderColor = '#e0e7ff')}
							/>
							<input
								type='text'
								placeholder='Аудитория'
								value={newLesson.room}
								onChange={e =>
									setNewLesson({ ...newLesson, room: e.target.value })
								}
								style={styles.input}
								onFocus={e => (e.target.style.borderColor = '#667eea')}
								onBlur={e => (e.target.style.borderColor = '#e0e7ff')}
							/>
						</div>
						<div style={styles.buttonContainer}>
							<button
								onClick={
									editingIndex !== null ? handleUpdateLesson : handleAddLesson
								}
								style={{ ...styles.button, ...styles.buttonPrimary }}
								onMouseEnter={e =>
									(e.target.style.transform = 'translateY(-2px)')
								}
								onMouseLeave={e => (e.target.style.transform = 'translateY(0)')}
							>
								{editingIndex !== null ? '💾 Сохранить' : '➕ Добавить'}
							</button>
							<button
								onClick={handleCancelEdit}
								style={{ ...styles.button, ...styles.buttonSecondary }}
								onMouseEnter={e => (e.target.style.backgroundColor = '#c7d2fe')}
								onMouseLeave={e => (e.target.style.backgroundColor = '#e0e7ff')}
							>
								❌ Отмена
							</button>
						</div>
					</div>
				)}

				{!isEditing && (
					<button
						onClick={() => setIsEditing(true)}
						style={{
							...styles.button,
							...styles.buttonPrimary,
							...styles.addButton,
						}}
						onMouseEnter={e => {
							e.target.style.transform = 'translateY(-2px)'
							e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
						}}
						onMouseLeave={e => {
							e.target.style.transform = 'translateY(0)'
							e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
						}}
					>
						<Plus size={20} />
						Добавить занятие
					</button>
				)}

				<div style={styles.lessonsContainer}>
					{scheduleData[selectedDay].length === 0 ? (
						<div style={styles.emptyState}>
							<p style={styles.emptyText}>📅 На этот день занятий нет</p>
						</div>
					) : (
						scheduleData[selectedDay].map((lesson, index) => (
							<div
								key={index}
								style={styles.lessonCard}
								onMouseEnter={e => {
									e.currentTarget.style.transform = 'translateY(-4px)'
									e.currentTarget.style.boxShadow =
										'0 15px 40px rgba(0,0,0,0.15)'
								}}
								onMouseLeave={e => {
									e.currentTarget.style.transform = 'translateY(0)'
									e.currentTarget.style.boxShadow =
										'0 10px 30px rgba(0,0,0,0.1)'
								}}
							>
								<div style={styles.lessonContent}>
									<div style={styles.lessonInfo}>
										<div style={styles.lessonTime}>
											<Clock size={18} />
											<span>{lesson.time}</span>
										</div>
										<h3 style={styles.lessonSubject}>{lesson.subject}</h3>
										<p style={styles.lessonTeacher}>👨‍🏫 {lesson.teacher}</p>
										<div style={styles.lessonRoom}>
											<MapPin size={16} />
											<span>{lesson.room}</span>
										</div>
									</div>
									<div style={styles.lessonActions}>
										<button
											onClick={() => handleEditLesson(index)}
											style={{ ...styles.iconButton, ...styles.editButton }}
											onMouseEnter={e =>
												(e.target.style.backgroundColor = '#c7d2fe')
											}
											onMouseLeave={e =>
												(e.target.style.backgroundColor = '#e0e7ff')
											}
										>
											<Edit2 size={20} />
										</button>
										<button
											onClick={() => handleDeleteLesson(index)}
											style={{ ...styles.iconButton, ...styles.deleteButton }}
											onMouseEnter={e =>
												(e.target.style.backgroundColor = '#fecaca')
											}
											onMouseLeave={e =>
												(e.target.style.backgroundColor = '#fee2e2')
											}
										>
											<Trash2 size={20} />
										</button>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}
